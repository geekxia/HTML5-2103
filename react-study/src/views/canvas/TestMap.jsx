import React, { useEffect, useRef } from 'react'
import { createSaleOpts } from './options'

console.log('BMapGL', BMapGL)
console.log('echarts', echarts)

let myChart = null

export default ()=> {

  const chart = useRef(null)

  useEffect(()=>{
    var map = new BMapGL.Map("container")
    var point = new BMapGL.Point(116.404, 39.915)
    map.centerAndZoom(point, 15)
  }, [])

  useEffect(()=>{
    var timer = setTimeout(()=>{
      var data = [5, 20, 36, 10, 10, 20]
      myChart.setOption(createSaleOpts({data}))
    }, 2000)
    return ()=>{
      clearTimeout(timer)
    }
  }, [])

  useEffect(()=>{
    myChart = echarts.init(document.getElementById('main'))
  }, [])

  return (
    <div>
      <h1>测试使用地图</h1>
      <div style={styles.map} id="container"></div>

      <div id="main" ref={chart} style={styles.chart}></div>
    </div>
  )
}

const styles = {
  map: {
    width: '100%',
    height: '400px',
    display: 'none'
  },
  chart: {
    width: '100%',
    height: '400px'
  }
}
