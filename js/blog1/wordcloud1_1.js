// 词云数据
const words = [
 {'text': '凡人修仙传', 'value': 8600},
 {'text': '极道天魔', 'value': 7426},
 {'text': '雪中悍刀行', 'value': 6570},
 {'text': '惊悚乐园', 'value': 5871},
 {'text': '诡秘之主', 'value': 5565},
 {'text': '大王饶命', 'value': 4504},
 {'text': '异常生物见闻录', 'value': 4475},
 {'text': '官道之色戒', 'value': 4211},
 {'text': '诛仙', 'value': 4200},
 {'text': '魔天记', 'value': 4084},
 {'text': '遮天', 'value': 3852},
 {'text': '恶魔岛', 'value': 3721},
 {'text': '放开那个女巫', 'value': 3537},
 {'text': '神秘之旅', 'value': 3315},
 {'text': '大主宰', 'value': 3130},
 {'text': '儒道至圣', 'value': 3080},
 {'text': '大道争锋', 'value': 3069},
 {'text': '希灵帝国', 'value': 3003},
 {'text': '娱乐春秋', 'value': 2929},
 {'text': '斗破苍穹', 'value': 2860},
 {'text': '修真四万年', 'value': 2764},
 {'text': '一念永恒', 'value': 2761},
 {'text': '完美世界', 'value': 2701},
 {'text': '俗人回档', 'value': 2686},
 {'text': '一世之尊', 'value': 2684},
 {'text': '逆流纯真年代', 'value': 2638},
 {'text': '极品家丁', 'value': 2614},
 {'text': '斗罗大陆III', 'value': 2605},
 {'text': '逍遥小书生', 'value': 2542},
 {'text': '全职高手', 'value': 2476},
 {'text': '玄界之门', 'value': 2434},
 {'text': '史上最强赘婿', 'value': 2432},
 {'text': '我师兄实在太稳健了', 'value': 2393},
 {'text': '修真聊天群', 'value': 2353},
 {'text': '庆余年', 'value': 2348},
 {'text': '择天记', 'value': 2335},
 {'text': '仙逆', 'value': 2332},
 {'text': '牧神记', 'value': 2248},
 {'text': '最强反派系统', 'value': 2225},
 {'text': '大奉打更人', 'value': 2200},
 {'text': '问道红尘', 'value': 2169},
 {'text': '重铸清华', 'value': 2163},
 {'text': '巫师之旅', 'value': 2162},
 {'text': '斗罗大陆IV终极斗罗', 'value': 2142},
 {'text': '权财', 'value': 2076},
 {'text': '全球高武', 'value': 2019},
 {'text': '我的女友是恶女', 'value': 2014},
 {'text': '唐砖', 'value': 1994},
 {'text': '大魏宫廷', 'value': 1988},
 {'text': '永夜君王', 'value': 1981},
 {'text': '文艺时代', 'value': 1973},
 {'text': '奥术神座', 'value': 1970},
 {'text': '超神机械师', 'value': 1953},
 {'text': '琥珀之剑', 'value': 1934},
 {'text': '小世界其乐无穷', 'value': 1928},
 {'text': '秦吏', 'value': 1925},
 {'text': '宰执天下', 'value': 1921},
 {'text': '百炼成仙', 'value': 1898},
 {'text': '我在末世有套房', 'value': 1896},
 {'text': '我有一座冒险屋', 'value': 1888},
 {'text': '吞噬星空', 'value': 1886},
 {'text': '武道宗师', 'value': 1885},
 {'text': '道君', 'value': 1841},
 {'text': '偷香高手', 'value': 1839},
 {'text': '梦幻香江(调教香江)', 'value': 1814},
 {'text': '从零开始', 'value': 1802},
 {'text': '深夜书屋', 'value': 1801},
 {'text': '第一序列', 'value': 1795},
 {'text': '隐杀', 'value': 1747},
 {'text': '高术通神', 'value': 1741},
 {'text': '我的姐姐是大明星', 'value': 1723},
 {'text': '深渊主宰', 'value': 1716},
 {'text': '掠天记', 'value': 1711},
 {'text': '将夜', 'value': 1680},
 {'text': '汉乡', 'value': 1673},
 {'text': '赤色黎明', 'value': 1657},
 {'text': '韩娱之光影交错', 'value': 1645},
 {'text': '民国之文豪崛起', 'value': 1639},
 {'text': '无限恐怖', 'value': 1613},
 {'text': '我要做皇帝', 'value': 1601},
 {'text': '春秋我为王', 'value': 1564},
 {'text': '走进修仙', 'value': 1558},
 {'text': '陈二狗的妖孽人生', 'value': 1548},
 {'text': '黄金渔场', 'value': 1548},
 {'text': '重生日本之以剑称圣', 'value': 1535},
 {'text': '绝世剑姬', 'value': 1531},
 {'text': '直死无限', 'value': 1529},
 {'text': '同时穿越了99个世界', 'value': 1526},
 {'text': '带着仓库到大明', 'value': 1503},
 {'text': '肆虐韩娱', 'value': 1492},
 {'text': '主神崛起', 'value': 1491},
 {'text': '白袍总管', 'value': 1488},
 {'text': '灭运图录', 'value': 1481},
 {'text': '巫界术士', 'value': 1477},
 {'text': '幻想世界大穿越', 'value': 1474},
 {'text': '雪鹰领主', 'value': 1469},
 {'text': '人道至尊', 'value': 1460},
 {'text': '不朽凡人', 'value': 1452},
 {'text': '我的1979', 'value': 1441},
 {'text': '神级猎杀者', 'value': 1427}
 ];

window.onload = function() {
  // 设置词云尺寸
  const width = 500;
  const height = 400;
  
  // 创建SVG容器
  const svg = d3.select("#wordcloud")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
    
  // 创建工具提示div
  const tooltip = d3.select("body")
    .append("div")
    .attr("class", "wordcloud-tooltip")
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
    .words(words)
    .padding(2)
    //.rotate(() => ~~(Math.random() * 2) * 90)
    .font("consolas") 
    .fontSize(d => Math.sqrt(d.value) * 0.4)
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
}