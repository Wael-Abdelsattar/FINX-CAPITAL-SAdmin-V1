Highcharts.chart('pie-chart-dealership', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#1B1B1B',
        useHTML: false,
        height: 250,
    },
    title: {
        text: '',
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>',
    },

    colors: ['#FA6400', '#9070FF', '#FF0000', '#F7B500', '#6DD400', '#FFFFFF', '#2B50ED'],
    accessibility: {
        point: {
            valueSuffix: '%',
        },
    },
    credits: {
        enabled: false,
    },
    exporting: {
        enabled: false,
    },
    legend: {
        align: 'left',
        verticalAlign: 'middle',
        layout: 'vertical',
        squareSymbol: false,
        useHTML: false,
        symbolWidth: 0,
        labelFormatter: function () {
            return (
                '<div style="padding-bottom:20px; color:' +
                this.color +
                '"> ' +
                this.name +
                // ' <span class=""></span> ' +
                ' ' +
                // '< style="flot:right">' +
                this.y +
                ' %</div>'
            );
        },
        itemStyle: { color: 'white', 'font-size': '12px', 'margin': '20px' },
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
            },
            borderWidth: 0,
            states: {
                hover: false,
            },
            showInLegend: true,
            point: {
                events: {
                    legendItemClick: function (e) {
                        const chart = $("#pie-chart-dealership").highcharts();
                        if (e.target.visible === true) {
                            chart.series[e.target.index].hide()
                        } else {
                            chart.series[e.target.index].show()
                        }
                    },
                },
            },
        },
        series: {
            marker: {
                enabled: false,
            },
        },
    },

    series: [
        {
            name: '',
            colorByPoint: true,
            innerSize: '50%',
            data: [
                {
                    name: 'Finance',
                    y: 25,
                    sliced: false,
                },
                {
                    name: 'Subprime',
                    y: 15,
                },
                {
                    name: 'Lease',
                    y: 10,
                },
                {
                    name: 'Fleet',
                    y: 0,
                },
                {
                    name: 'Cash Conv.',
                    y: 0,
                },
                {
                    name: 'Lease BuyBack',
                    y: 0,
                },
                {
                    name: 'Older Unit',
                    y: 0,
                },
            ],
        },
    ],
});


