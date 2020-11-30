

// default pie-chart
if ($('#pie-chart').length) {
  Highcharts.chart('pie-chart', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      backgroundColor: '',
      useHTML: false,
      height: '340px',
    },
    title: {
      text: '',
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>',
    },

    colors: ['#50F52E', '#F55631' , '#7D4DFF' , '#FF0000', ],
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
      itemMarginTop: 10,
      itemMarginBottom: 10,
      squareSymbol: true,
      symbolWidth: 10,
      symbolHeight:10,
      symbolRadius: 10,
      itemHoverStyle : '#fff',
      fontWeight : '100',
      margin : 30,
      labelFormatter: function () {
        return (
          `
          <span style="color : ${this.color}"> ${this.name} ${this.y}%</span>
          
          `
        );
      },
      itemStyle: { color: '#fff', fontSize: '15px', fontWeight : '100' },
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
        innerSize: '60%',
        data: [
          {
            name: 'Finance',
            y: 50,
            sliced: false,
          },
          {
            name: 'Subprime',
            y: 25,
          },
          {
            name: 'Lease BuyBack',
            y: 15,
          },
          {
            name: 'Fleet',
            y: 10,
          },
          {
            name: 'Cash Conv',
            y: 0,
          },
          {
            name: 'Lease BuyBack',
            y: 0,
          },
          {
            name: 'Older Units',
            y: 0,
          }
        ],
      },
    ],
  });
}


// paymentBreakdownProducts pie-chart
if ($('#paymentBreakdownProducts-pie-chart').length) {
  Highcharts.chart('paymentBreakdownProducts-pie-chart', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      backgroundColor: '',
      useHTML: true,
      height: '275px',
    },
    title: {
      text: '',
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>',
    },

    colors: ['#E02020', '#FA6400', '#6DD400', '#F7B500'],
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
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      useHTML: false,
      itemMarginTop: 7,
      itemMarginBottom: 7,
      squareSymbol: true,
      symbolWidth: 20,
      symbolHeight: 15,
      symbolRadius: 3,
      labelFormatter: function () {
        return (
          '<span class="text-right">' + this.name + ' ' + this.y + '%</span>'
        );
      },
      itemStyle: { 'font-size': '18px', },
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
        innerSize: '75%',
        data: [
          {
            name: 'Warranty',
            y: 25,
            sliced: false,
          },
          {
            name: 'PPMP',
            y: 25,
          },
          {
            name: 'Tier&Rim',
            y: 25,
          },
          {
            name: 'KeyFob',
            y: 25,
          },
        ],
      },
    ],
  });
}

// paymentBreakdownProducts pie-chart
if ($('#combined-pie-chart').length) {
  Highcharts.chart('combined-pie-chart', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      backgroundColor: '',
      useHTML: true,
      height: '275px',
    },
    title: {
      text: '',
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>',
    },

    colors: ['#6DD400', '#F04E31', '#2E7ED8', '#0D233A'],
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
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      useHTML: false,
      itemMarginTop: 7,
      itemMarginBottom: 7,
      squareSymbol: true,
      symbolWidth: 20,
      symbolHeight: 15,
      symbolRadius: 3,
      labelFormatter: function () {
        return (
          '<span class="text-right">' + this.name + ' ' + this.y + '%</span>'
        );
      },
      itemStyle: { 'font-size': '18px', },
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
        innerSize: '75%',
        data: [
          {
            name: 'Vehicle',
            y: 25,
            sliced: false,
          },
          {
            name: 'Products',
            y: 25,
          },
          {
            name: 'Interest',
            y: 25,
          },
          {
            name: 'Paid Up',
            y: 25,
          },
        ],
      },
    ],
  });
}

