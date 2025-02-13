var values = [['都市娱乐', '武侠', '仙侠', '奇幻', '玄幻', '科幻', '灵异', '历史', '军事', '竞技', '游戏', '二次元'],
[1663, 168, 747, 231, 1265, 574, 409, 807, 94, 101, 365, 148],
[5.4, 3.2, 5.3, 4.3, 6.0, 5.2, 3.4, 5.1, 6.4, 5.9, 5.5, 4.5],
[122.4, 115.2, 191.1, 191.6, 136.2, 214.3, 73.7, 153.5, 133.5, 65.3, 190.2, 174.0],
[90.1, 68.8, 77.1, 70.2, 91.6, 108.9, 36.1, 70.0, 116.8, 109.5, 89.7, 170.3],
[9.1, 8.6, 12.4, 12.9, 10.5, 15.7, 5.3, 10.5, 8.7, 6.6, 13.0, 16.4],
[7.3, 8.0, 10.0, 10.2, 8.9, 11.9, 4.7, 8.0, 7.0, 5.8, 10.4, 14.5],
[8.7, 9.0, 11.3, 10.9, 12.8, 12.4, 5.3, 9.0, 8.1, 6.8, 11.5, 14.5],
[237.5, 209.6, 302.1, 295.8, 260.0, 363.1, 125.1, 251.0, 274.2, 194.1, 314.7, 389.7]]

var headerColor = "grey";
var rowEvenColor = "lightgrey";
var rowOddColor = "white";

var data = [{
  type: 'table',
  header: {
    values: [["<b>小说类型</b>"], ["<b>书名数</b>"],
         ["<b>书籍大小均值</b>"], ["<b>仙草数均值</b>"], 
         ["<b>毒草数均值</b>"], ["<b>粮草数均值</b>"], 
         ["<b>干草数均值</b>"], ["<b>枯草数均值</b>"],["<b>评价人数均值</b>"]],
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
              rowEvenColor,rowOddColor,rowEvenColor,rowOddColor,rowEvenColor,rowOddColor,rowEvenColor,rowOddColor]]},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]

Plotly.newPlot('sizechart3', data);
