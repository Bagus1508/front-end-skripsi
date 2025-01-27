<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            series: [{
                name: 'Ganjil',
                data: [71, 72, 73, 74, 75, 76, 77, 78]
            }, {
                name: 'Genap',
                data: [81, 82, 93, 64, 85, 96, 37, 88]
            }],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        borderRadius: 5,
                        borderRadiusApplication: 'end'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: [
                        'Kimia',
                        'Matematika',
                        'Fisika',
                        'Indonesia',
                        'Inggris',
                        'Hukum',
                        'Sosial',
                        'Psikotest 1',
                    ],
                },
                yaxis: {
                    title: {
                        text: 'Mata Pelajaran'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                }
            },
        }
    }
}
</script>

<template>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
</template>