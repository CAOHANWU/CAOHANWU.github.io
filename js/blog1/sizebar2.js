var trace1 = {
  x:['超小', '小', '中小型', '中型', '中高型', '大型'],
  y:[1924, 2147, 1369, 763, 290, 79],
  name: '书名数目',
  type: 'bar',
};

var trace2 = {
  x:['超小', '小', '中小型', '中型', '中高型', '大型'],
  y:[100.5, 224.5, 339.4, 500.0, 561.1, 617.1],
  name: '评价人数均值',
  type: 'bar',
};

var trace3 = {
  x:['超小', '小', '中小型', '中型', '中高型', '大型'],
  y:[56.8, 118.6, 196.0, 300.2, 305.9, 295.7],
  name: '仙草数均值',
  type: 'bar',
};

var trace4 = {
  x:['超小', '小', '中小型', '中型', '中高型', '大型'],
  y:[28.4, 79.0, 106.5, 150.7, 202.6, 264.8],
  name: '毒草数均值',
  type: 'bar',
};

var trace5 = {
  x:['超小', '小', '中小型', '中型', '中高型', '大型'],
  y:[4.8, 10.1, 13.8, 17.9, 18.3, 18.5],
  name: '粮草数均值',
  type: 'bar',
};

var trace6 = {
  x:['超小', '小', '中小型', '中型', '中高型', '大型'],
  y:[4.2, 8.0, 10.9, 14.6, 15.4, 16.9],
  name: '干草数均值',
  type: 'bar',
};

var trace7 = {
  x:['超小', '小', '中小型', '中型', '中高型', '大型'],
  y:[6.3, 8.7, 12.2, 16.7, 18.8, 21.1],
  name: '枯草数均值',
  type: 'bar',
};

var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];

var layout = {
  scattermode: 'group',
  title: {
    text: '大小类型分组'
  },
  xaxis: {
    title: {
      text: '大小类型'
    }
  },
  yaxis: {
    title: {
      text: '数目'
    }
  },
  barcornerradius: 15,
};

Plotly.newPlot('sizebar2', data, layout);


