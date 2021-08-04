<template>
<div class="qf-cate-select">
  <!-- v-model可以绑定一个计算属性，但是一定要添加setter -->
  <el-select
    v-model="c"
    clearable
    placeholder="请选择品类"
    @change='$emit("change", $event)'
  >
    <el-option
      v-for="item in cateList"
      :key="item.id"
      :label="item.cate_zh"
      :value="item.cate">
    </el-option>
  </el-select>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  // 父组件传递过来的值
  props: {
    value: { type: String, required: false, default: '' }
  },
  data() {
    return {
      cate: ''
    }
  },
  computed: {
    ...mapState('good', ['cateList']),
    c: {
      get() {
        return this.value
      },
      set(newCate) {
        this.$emit("input", newCate)
      }
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    ...mapActions('good', ['getCateList']),
    // cateChange(e) {
    //   console.log('cate e', e)
    //   this.$emit('input', e)
    // }
  }
}
</script>

<style lang="css" scoped>
</style>
