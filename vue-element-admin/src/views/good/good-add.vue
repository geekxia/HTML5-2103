<template>
<div class="good-add-container">
  <!-- 表单 S -->
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>

    <el-form-item label='商品描述' prop='desc'>
      <el-input type="textarea" v-model="ruleForm.desc" />
    </el-form-item>

    <el-form-item label="商品品类" prop="cate">
      <QfCateSelect v-model='ruleForm.cate' />
    </el-form-item>

    <el-form-item label='商品价格' prop='price'>
      <el-input-number
        v-model.number="ruleForm.price"
        :step="0.5"
        :min="0" />
    </el-form-item>

    <el-form-item label='是否热销' prop='hot'>
      <el-switch
        v-model="ruleForm.hot"
        inactive-color="#dddddd">
      </el-switch>
    </el-form-item>

    <el-form-item label='商品图片' prop='list'>
      <!-- action用于指定上传图片时的url -->
      <!-- name属性指定图片的名字，用于在服务端接收 -->
      <el-upload
        action="http://localhost:8888/api/v1/upload/img"
        name='xxx'
        :multiple='false'
        :limit='1'
        :on-success='imgSuccess'
        list-type="picture-card">
          <!-- <i v-show='!ruleForm.img' slot="default" class="el-icon-plus"></i>
          <div v-show='ruleForm.img' slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
          </div> -->
      </el-upload>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submit">立即添加</el-button>
    </el-form-item>

  </el-form>
</div>
</template>

<script>
import QfCateSelect from './components/qf-cate-select.vue'
export default {
  name: 'GoodAdd',
  components: {
    QfCateSelect
  },
  data() {
    return {
      ruleForm: {
        name: '',
        desc: '',
        cate: '',
        price: 0,
        hot: false,
        img: ''
      },
      // 指定Form表单的验证规则
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 4, max: 10, message: '长度在4到 10个字符', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请输入商品描述', trigger: 'blur' },
          { min: 20, max: 40, message: '长度在20到 40个字符', trigger: 'blur' }
        ],
        cate: [
          { required: true, message: '请输入商品品类', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        list: [
          { required: true, message: '请上传商品图片', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    // 当图片上传成功时触
    imgSuccess(res) {
      console.log('res图片上传成功后端返回的数据', res)
      this.ruleForm.img = res.data.url
    },
    // 功能：最终提交添加商品的接口
    submit() {
      console.log('入参', this.ruleForm)
      this.$api.fetchGoodUpdate(this.ruleForm).then(()=>{
        // 添加商品成功
        var that = this
        this.$message({
          message: '恭喜你，添加商品成功',
          type: 'success',
          onClose() {
            // 当弹框消失时，注意this指向问题
            that.$router.back()
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.good-add-container {
  padding: 20px;
  box-sizing: border-box;
  width: 60%;
}
</style>
