<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [44, 55, 13],
      chartOptions: {
        chart: {
          type: 'pie',
        },
        labels: ['Teknologi', 'Sains', 'Sosial'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<template>
    <apexchart :options="chartOptions" :series="series" type="pie" height="380"></apexchart>
</template>

<style scoped>
</style>