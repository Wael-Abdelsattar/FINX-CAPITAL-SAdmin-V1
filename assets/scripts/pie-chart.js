Highcharts.chart('pie-chart', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    backgroundColor: '#1B1B1B',
    useHTML: false,
    height: '290px',
  },
  title: {
    text: '',
  },
  tooltip: {
    pointFormat: '<b>{point.percentage:.1f}%</b>',
  },

  colors: ['#58FF35', '#9B66FF', '#FF0000'],
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
    useHTML: true,
    symbolWidth: 0,
    labelFormatter: function () {
      return (
        '<span style="color:' +
        this.color +
        '"> ' +
        this.name +
        ' <span class="space ml-4"></span> ' +
        this.y +
        ' %</span>'
      );
    },
    itemStyle: { color: 'white', 'font-size': '16px' },
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
            const chart = $("#lines-chart").highcharts();
            if(e.target.visible === true) {
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
      innerSize: '60%',
      data: [
        {
          name: 'Finance',
          y: 50,
          sliced: false,
        },
        {
          name: 'Subprime',
          y: 40,
        },
        {
          name: 'Lease BuyBack',
          y: 10,
        },
      ],
    },
  ],
});
