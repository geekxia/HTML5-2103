// 作用：重置html的font-size
// 让html根字体的大小，等于屏幕px总像素的10分之1

function resetRootFZ() {
  var oHtml = document.querySelector('html')
  var w = oHtml.getBoundingClientRect().width  // px（当前屏幕的总宽度）
  // 设置根字体的大小等于html节点的宽度的十分之一
  oHtml.style.fontSize = w/10 + 'px'
}

resetRootFZ()

// 当window窗口尺寸变化时，重新设置根字体的大小
window.addEventListener('resize',function(){
  resetRootFZ()
})

// em：相对于最近一个父元素的fontSize
// rem：root font size相对于html根元素的font-size
// px：绝对单位

// vw vh 在任何屏幕上，总宽度=100vw, 总高度=100vh

// 以当前环境为例：

// 10rem  =  当前屏幕的总宽度
// 750px  =  UI稿子的总宽度
// 结论：在UI稿上量取的尺寸，除以75就得到了我们需要的rem单位。
// 有没有插件，帮助我们自动计算？

// .lun {
//   height: 352/75 ?rem;
// }
// .good {
//   width: 250/75 rem;
//   font-size: 34/75rem;
// }
