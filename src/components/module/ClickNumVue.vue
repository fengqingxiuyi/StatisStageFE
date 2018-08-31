<template>
  <div id="app">
    <div id="myChart"></div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>

// 引入echarts
import echarts from 'echarts/lib/echarts'
// 引入Toast组件
import Toast from '../common/toast/Toast'

export default {
  name: 'ClickNumVue',
  components: {
    [Toast.name]: Toast
  },
  data () {
    return {
      nameArr: [], // 事件名数组
      dateArr: [], // 日期数组
      series: []
    }
  },
  created () {
    this.getData()
  },
  mounted () { // 自适应
    window.onresize = () => {
      this.echarts.resize()
    }
  },
  methods: {
    getData () {
      this.axios.get('http://104.224.173.101:8080/statisstageserver/getFed')
        .then(response => {
          console.log(JSON.stringify(response.data))
          this.$refs.toast.show(response.data.resultMessage, 2500)
          this.dealData(response.data)
        }).catch(response => {
          console.log(JSON.stringify(response.data))
          this.$refs.toast.show('resultCode = ' + response.data.resultCode + ', resultMessage = ' + response.data.resultMessage, 2500)
        })
    },
    // 数据处理
    dealData (data) {
      this.nameArr = data.data.name
      this.dateArr = data.data.date
      this.series = data.data.item
      this.series.forEach(item => {
        item.type = 'line'
        item.stack = '总量'
        item.data = item.num
      })
      this.drawLine()
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '事件统计'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.nameArr
        },
        grid: {
          left: '3%',
          right: '3%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.dateArr
        },
        yAxis: {
          type: 'value'
        },
        series: this.series
      })
    }
  }
}
</script>

<style>
  #app {
    text-align: center;
  }
  #myChart {
    width: 100%;
    height: 500px;
  }
</style>
