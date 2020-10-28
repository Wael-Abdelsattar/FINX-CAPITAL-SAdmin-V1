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
