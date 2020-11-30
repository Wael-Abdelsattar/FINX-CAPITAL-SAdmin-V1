
// lendingAmortization-line-chart
if ($('#lendingAmortization-line-chart').length) {
  let ctx = document.getElementById('lendingAmortization-line-chart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['0m', '1m', '2m', '3m', '4m', '6m', '7m', '8m', '9m', '10m'],
      datasets: [
        {
          label: 'data label 1',
          data: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,],
          backgroundColor: 'transparent',
          borderColor: [
            '#6DD400',
          ],
          borderWidth: 3
        },
        {
          label: 'data label 2',
          data: [200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,],
          backgroundColor: 'transparent',
          borderColor: [
            '#EC654D',
          ],
          borderWidth: 3
        },
        {
          label: 'data label 3',
          data: [500000, 450000, 400000, 350000, 300000, 250000, 200000, 150000, 100000, 50000],
          backgroundColor: 'transparent',
          borderColor: [
            '#4867E9',
          ],
          borderWidth: 3
        },
        {
          label: 'data label 3',
          data: [0, 60000, 120000, 180000, 240000, 300000, 360000, 420000, 480000, 540000],
          backgroundColor: 'transparent',
          borderColor: [
            '#000000',
          ],
          borderWidth: 3
        },
      ]
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 1000000,
            stepSize: 200000,
          }
        }]
      }
    }
  });
}


// lines-chart with Highcharts
if ($('#lines-chart').length) {
  Highcharts.chart('lines-chart', {
    title: {
      text: '',
    },

    subtitle: {
      text: '',
    },

    yAxis: {
      labels: {
        style: {
          color: '#ffffff',
        },
        format: '{value}'
      },
      title: {
        text: '',
      },
    },

    xAxis: {
      type: 'datetime',
      labels: {
        style: {
          color: '#ffffff',
        },
        allowDecimals: false,
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    colors: ['#58FF35', '#9B66FF', '#FF0000'],

    chart: {
      backgroundColor: '#1B1B1B',
      height: '290px'
    },
    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      enabled: false,
    },

    tooltip: {
      shared: true,
      crosshairs: true,
    },

    plotOptions: {
      series: {
        label: {
          enabled: false,
          connectorAllowed: false,
        },
        states: {
          hover: {
            enabled: false,
          },
        },
        marker: {
          symbol: 'circle'
        },
      },
    },

    series: [
      {
        name: 'Finance',
        data: [
          1400,
          1800,
          2200,
          1900,
          2900,
          2600,
          3200,
          3400,
          3300,
          3900,
          3600,
          4000,
        ],
      },
      {
        name: 'Subprime',
        data: [
          900,
          1300,
          1700,
          1400,
          2400,
          2100,
          2800,
          2600,
          2800,
          2800,
          3100,
          3500,
        ],
      },
      {
        name: 'Lease BuyBack',
        data: [
          400,
          800,
          1200,
          900,
          1900,
          1600,
          2000,
          2100,
          2000,
          2200,
          2000,
          2700,
        ],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
        },
      ],
    },
  });
}
