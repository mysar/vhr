<template>
  <div>
    <schart class="wrapper"
            :canvasId="canvasId"
            :type="type"
            style="width:700px; height:500px"

            :data="data"
            :options="options"></schart>
  </div>
</template>
  <script>
    import Schart from 'vue-schart';
    export default {
      data() {
        return {
          canvasId: 'myCanvas',
          type: 'bar',
          data: [
            {name: '2014', value: 50},
            {name: '2015', value: 120},
            {name: '2016', value: 120},
            {name: '2017', value: 69},
            {name: '2018', value: 80},
            {name: '2019', value: 90},
          ],
          options: {
            title: '人员信息统计信息图表'
          }
        }
      },
      components: {
        Schart
      }
    }
  </script>

