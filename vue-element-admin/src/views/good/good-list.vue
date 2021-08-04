<template>
<div class="good-list-container">
  <!-- 面板 S -->
  <div class="filter">
    <!-- 第一行 -->
    <el-row type='flex' align='middle'>
      <!-- 名称搜索 -->
      <el-col :span="2">
        <span class="label">搜索:</span>
      </el-col>
      <el-col :span='4'>
        <el-input
          v-model.trim="filter.name"
          clearable
          placeholder="请输入内容"
          @change='filterChange'
        />
      </el-col>

      <!-- 品类搜索 -->
      <el-col :span="2">
        <span class="label">品类:</span>
      </el-col>
      <el-col :span='4'>
        <!-- 自定义封装的品类下拉框组件 -->
        <!-- v-model = v-bind:value + v-on:input -->
        <QfCateSelect
          v-model='filter.cate'
          @change='filterChange'
        />
      </el-col>
    </el-row>

    <!-- 第二行 -->
    <el-row type='flex' align='middle'>
      <el-col :span='2'>
        <span class="label">日期:</span>
      </el-col>
      <el-col :span='6'>
        <el-date-picker
          v-model="filter.date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-col>
    </el-row>
  </div>
  <!-- 面板 E -->

  <!-- 表格 S -->
  <div class="table">
    <el-table
      :data="list"
      tooltip-effect="dark"
      @selection-change="mulSelect"
      style="width: 100%">

      <!-- type="selection"实现第一列放置checkbox -->
      <el-table-column
        type="selection"
        align='center'>
      </el-table-column>

      <el-table-column
        prop="name"
        align='center'
        label="商品名称">
        <!-- slot-scope='scope' 可以拿到“行”的数据 scope.row -->
        <template slot-scope='scope'>
          <div class="name-img">
            <img :src='"http://localhost:9999"+scope.row.img' alt="" />
            <div v-text='scope.row.name'></div>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        prop="price"
        align='center'
        :sortable='true'
        :sort-method='(a,b)=>a.price>=b.price'
        label="价格">
        <template slot-scope='scope'>
          <div v-text='"￥"+scope.row.price'></div>
        </template>
      </el-table-column>

      <el-table-column
        prop="cate"
        align='center'
        label="商品品类">
        <template slot-scope='scope'>
          <div v-text='cateToCateZh(scope.row.cate)'></div>
        </template>
      </el-table-column>

      <!-- 布尔值不显示，将其转换成文本类的值才会显示 -->
      <el-table-column
        prop="hot"
        align='center'
        label="是否热销">
        <template slot-scope='scope'>
          <div v-text='scope.row.hot?"是":"否"'></div>
        </template>
      </el-table-column>

      <el-table-column
        prop="create_time"
        align='center'
        width='150'
        label="上架时间">
        <template slot-scope='scope'>
          <!-- 在这里直接使用moment会报错，建议把这个复杂表达式封装一个methods方法 -->
          <div v-text='stampToDate(scope.row.create_time)'></div>
          <div v-text='stampToTime(scope.row.create_time)'></div>
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        width='200'
        align='center'>
        <!-- 使用 slot-scope="scope" 可以拿到表格的“行”数据 -->
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleRow(scope.row, 'edit')">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleRow(scope.row, 'del')">删除</el-button>
        </template>
      </el-table-column>
      <template #append>
        <div class="footer">
          <el-button
            size="mini"
            type="danger"
            @click="delAll">
            删除选中的行
          </el-button>
          <el-button
            size="mini">
            取消选择
          </el-button>
        </div>
      </template>
    </el-table>
  </div>
  <!-- 表格 E -->

  <!-- 分页 S -->
  <div class="page">
    <el-pagination
      @size-change="filterChange"
      @current-change="filterChange"
      :page-sizes="[2, 5, 10, 20]"
      :current-page.sync="filter.page"
      :page-size.sync="filter.size"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
  <!-- 分页 E -->
</div>
</template>

<script>
// 引入安装过的moment这个第三方的时间处理工具
import moment from 'moment'
import QfCateSelect from './components/qf-cate-select.vue'
import { mapState } from 'vuex'
export default {
  name: 'GoodList',
  components: {
    QfCateSelect
  },
  data() {
    return {
      // 所有查询参数
      filter: {
        name: '',
        cate: '',
        date: '',
        page: 1,
        size: 2
      },
      list: [],
      total: 0
    }
  },
  computed: {
    ...mapState('good', ['cateList'])
  },
  created() {this.init()},
  // 解决keep-alive组件导致的“不刷新问题”
  activated() {this.init()},
  methods: {
    init() {
      // 这个商品列表接口，我不想走vuex流程
      this.$api.fetchGoodList(this.filter).then(res=>{
        console.log('商品列表', res)
        let { list, total } = res.data
        this.total = total
        this.list = list
      })
    },
    filterChange() {
      console.log('---name搜索')
      // 使用最新的 this.filter 来查询商品列表
      this.init()
    },
    // 把时间戳转化成年月日
    // 这些methods方法，是在beforeCreate之间就声明了
    stampToDate(stamp) {
      return moment(stamp).format("MM月DD日")
    },
    stampToTime(stamp) {
      return moment(stamp).format("HH:mm")
    },
    cateToCateZh(cate) {
      var ele = this.cateList.find(ele=>ele.cate===cate)
      return ele ? ele.cate_zh : ''
    },
    // 功能：编辑、删除
    handleRow(row, type) {
      console.log('row', row)
      console.log('type', type)
    },
    // 功能：checkbox多选
    mulSelect(e) {
      console.log('多选', e)
    },
    // 功能：多删
    delAll() {
      console.log('多行')
    }
  }
}
</script>

<style lang="scss" scoped>
.good-list-container {
  padding: 20px;
  box-sizing: border-box;
  font-size: 14px;
  .filter {
    background-color: rgba(250,250,250,1);
    padding: 15px 0;
  }
  .el-row {
    margin-bottom: 25px;
  }
  .label {
    display: block;
    text-align: right;
    padding-right: 8px;
  }
  .table {
    margin: 25px 0;
  }
  .footer {
    padding: 15px 0;
    background-color: rgba(250,250,250,1);
  }
  .page {
    margin: 15px 0;
    text-align: right;
  }
  .name-img {
    &>img {
      display: inline-block;
      width: 50px;
      height: 50px;
    }
  }
}

</style>
