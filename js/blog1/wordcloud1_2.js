// 第二个词云数据
const words2 = [{'text': '重生', 'value': 0.1541222616226199},
 {'text': '超级', 'value': 0.08573170621416311},
 {'text': '都市', 'value': 0.0745788774624856},
 {'text': '网游', 'value': 0.0671831033370214},
 {'text': '极品', 'value': 0.0611710559884856},
 {'text': '异界', 'value': 0.05999440518060516},
 {'text': '最强', 'value': 0.05029337250159779},
 {'text': '三国', 'value': 0.04264207355450258},
 {'text': '高手', 'value': 0.04136448322389299},
 {'text': '至尊', 'value': 0.04098024283478524},
 {'text': '修仙', 'value': 0.03402751471061254},
 {'text': '末世', 'value': 0.032848882936258296},
 {'text': '天下', 'value': 0.03266154904177712},
 {'text': '系统', 'value': 0.03257977635826421},
 {'text': '无限', 'value': 0.03240359574726199},
 {'text': '世界', 'value': 0.0319103624466},
 {'text': '诸天', 'value': 0.03148125267236162},
 {'text': '穿越', 'value': 0.030410315262804428},
 {'text': '无敌', 'value': 0.030328081615878966},
 {'text': '大唐', 'value': 0.029543897343622137},
 {'text': '传奇', 'value': 0.028323273145591885},
 {'text': '武神', 'value': 0.026672887007527676},
 {'text': '风流', 'value': 0.02632673409460074},
 {'text': '美女', 'value': 0.025197633521158672},
 {'text': '人生', 'value': 0.024763828305111438},
 {'text': '帝国', 'value': 0.024651604231905534},
 {'text': '神级', 'value': 0.023821307939357935},
 {'text': '游戏', 'value': 0.023344150502175646},
 {'text': '万界', 'value': 0.02293903727493727},
 {'text': '英雄', 'value': 0.022574243655},
 {'text': '异世', 'value': 0.022056766610516605},
 {'text': '大明', 'value': 0.0218374948060738},
 {'text': '全能', 'value': 0.021834910227600736},
 {'text': '绝世', 'value': 0.021831619495616236},
 {'text': '大宋', 'value': 0.02117449594609594},
 {'text': '武侠', 'value': 0.020314217516789666},
 {'text': '末日', 'value': 0.01958176792611808},
 {'text': '传说', 'value': 0.019544918653332844},
 {'text': '召唤', 'value': 0.01906861748267749},
 {'text': '保镖', 'value': 0.01898479656697417}];

document.addEventListener('DOMContentLoaded', function() {
  // 设置词云尺寸
  const width = 400;
  const height = 200;
  
  // 创建SVG容器
  const svg = d3.select("#wordcloud2")  // 注意这里改为 wordcloud2
    .append("svg")
    .attr("width", width)
    .attr("height", height);
    
  // 创建工具提示div
  const tooltip = d3.select("body")
    .append("div")
    .attr("class", "wordcloud-tooltip2")  // 改为 wordcloud-tooltip2
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "rgba(0, 0, 0, 0.8)")
    .style("color", "white")
    .style("padding", "5px 10px")
    .style("border-radius", "4px")
    .style("font-size", "12px");

  // 配置词云布局
  const layout = d3.layout.cloud()
    .size([width, height])
    .words(words2)  // 使用 words2
    .padding(2)
    //.rotate(() => ~~(Math.random() * 2) * 90)
    .font("华文楷体")
    .fontSize(d => Math.sqrt(d.value* 10000) )
    .on("end", draw);

  // 绘制词云
  function draw(words) {
    svg.append("g")
      .attr("transform", `translate(${width/2},${height/2})`)
      .selectAll("text")
      .data(words)
      .enter()
      .append("text")
      .style("font-size", d => `${d.size}px`)
      .style("font-family", "Impact")
      .style("fill", () => d3.schemeCategory10[~~(Math.random() * 10)])
      .attr("text-anchor", "middle")
      .attr("transform", d => `translate(${d.x},${d.y})rotate(${d.rotate})`)
      .text(d => d.text)
      .on("mouseover", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .style("font-size", `${d.size * 1.2}px`);
          
        tooltip
          .style("visibility", "visible")
          .text(`${d.text}: ${d.value}`);
      })
      .on("mousemove", function(event) {
        tooltip
          .style("top", (event.pageY - 10) + "px")
          .style("left", (event.pageX + 10) + "px");
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .style("font-size", `${d.size}px`);
          
        tooltip
          .style("visibility", "hidden");
      });
  }

  // 开始生成词云
  layout.start();
});