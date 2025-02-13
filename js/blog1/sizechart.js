var values = [['超小', '小', '中小型', '中型', '大型', '超大'],
[1924, 2147, 1369, 763, 290, 79],
[100.5, 224.5, 339.4, 500.0, 561.1, 617.1],
[56.8, 118.6, 196.0, 300.2, 305.9, 295.7],
[28.4, 79.0, 106.5, 150.7, 202.6, 264.8]]

var headerColor = "grey";
var rowEvenColor = "lightgrey";
var rowOddColor = "white";

var data = [{
  type: 'table',
  header: {
    values: [["<b>大小类型</b>"], ["<b>书名数</b>"],
         ["<b>评价人数均值</b>"], ["<b>仙草数均值</b>"], ["<b>毒草数均值</b>"]],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: headerColor},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    align: "center",
    line: {color: "black", width: 1},
    fill: {color: [[rowOddColor,rowEvenColor,rowOddColor,
              rowEvenColor,rowOddColor,rowEvenColor]]},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]

Plotly.newPlot('sizechart', data);
