// 这个方法只能在setup或生命周期选项中使用
// 不能在状态管理和路由文件使用
import { getCurrentInstance } from 'vue'

// 获取app实例上的全局数据
export function getApp() {
	console.log('实例', getCurrentInstance())
	return getCurrentInstance().appContext.config.globalProperties
}
