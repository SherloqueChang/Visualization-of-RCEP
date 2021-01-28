<h1 align=center>RCEP各国贸易关系与经济对比可视化项目报告</h1>

<div align=right>小组成员：<br>蒋雪莹 杨志朗 张泽辰 常文辉
</div>
项目链接：

# 1 摘要

​		本次项目聚焦区域全面经济伙伴关系协定（RCEP），着重通过数据可视化来反映各国之间的贸易关系和经济实力的对比。

​		借助不同形式的图表可视化，我们希望能够更为直观地展示各个国家的经济数据指标和彼此之间的贸易状况，并通过一定的交互手段在特定的国家之间进行经济实力的对比。这里我们特别关注了国家各类商品进出口贸易额的差别，借此反映一个国家相应的经济结构，进而获取更为丰富的信息。

# 2 数据描述与分析

## 2.1 数据来源&类型

​		我们数据收集的来源主要是以下两个网站：https://oec.world/和https://www.theglobaleconomy.com。为了保证得到的数据准确可靠，排除季节和其他原因的波动，我们一般以年为最小单位。受制于数据统计的最早时间和数据来源的完整性，我们认为考虑近10年的数据会比较有价值。最终通过筛选及处理得到的关于15个成员国的数据包括：

- **Gross Domestic  Product billions of U.S. dollars** & **GDP per capita  current U.S. dollars**：2000年至2018年的GDP及人均GDP
- **Exchange rate**: local  currency units per U.S. dollar：2000年至2018年的汇率
- **Economic growth**:  the rate of change of real GDP：2000年至2018年的经济增长率
- **Exports of goods  and services** billion USD & **Imports of goods  and services** billion USD：2000年至2018年的出口贸易额以及进口贸易额
- **Trade balance** billion USD：成员国内部之间的贸易差额（限于处理工作量较大，只选择了2016年的数据）
- 2010年至2018年各类（21类）商品的进/出口贸易额

## 2.2 数据分析

​		选定数据类型中，GDP反映的是一个国家总体的经济实力，人均GDP则一定程度反映了一国的发展水平和国民收入水平；

​        汇率是国际贸易中最重要的调节杠杆，一方面反映本国经济运行的稳定程度，另一方面也显著地影响进出口，汇率变动对一国进出口贸易有着直接的调节作用，在一定条件下，通过使本国货币对外贬值，即让汇率上升，会起到促进出口、限制进口的作用;反之,本国货币对外升值，即汇率下降,则起到限制出口、增加进口的作用；

​        进出口贸易总额，和各国（特别是主要贸易伙伴和其他RCEP国家）之间的进出口贸易额反映一个国家和RCEP各国之间大致的贸易状况；

​        贸易差额则直接体现了国家之间贸易往来的优势方/劣势方，表明一国对外贸易的收支情况，对一国的国际收支有重大影响。贸易差额的变化，反映一国经济实力和对外竞争能力的变化，同时也受经济状况的影响，它能反映一国在对外贸易收支上是否处于有利的地位；

​        经济增长率的高低体现了一个国家或地区在一定时期内经济总量的增长速度，也是衡量一个国家或地区总体经济实力增长速度的标志；

​        主要进出口商品构成反映了一个国家进出口商品的品类，可以体现出一个国家在供应链中的位置，也能体现出RCEP中各国在供应链中的合作共赢和竞争关系。

# 3 项目设计与展示

​		本项目设计为2个页面，分别作为概览（Overview）和对比（Comparison）。

## 3.1 界面1(index.html)

​		实现效果如图所示：

<img src="C:\Users\Sherloque\AppData\Roaming\Typora\typora-user-images\image-20210118220442037.png" alt="image-20210118220442037" style="zoom:75%;" />

​		界面左边区域是**Sunburst Graph**，连线的属性是该国家贸易额最多的5个国家。最初的想法是选择一国出口贸易额和进口贸易额最多的两个国家进行相连，但实现之后发现由于大部分国家最大的进出口贸易对象都是中国，导致了图布局的严重偏倚，因而最终选择了TOP 5 贸易伙伴作为连线的依据，一方面使图布局更为均衡，另一方面也直观地反映出成员国之间的贸易联系，对各国的经济水平有一个全局性的认识。
​		通过鼠标的悬浮操作可以查看一国对外贸易中前5的国家，左下角的交互输入框可以控制连线的紧致程度，突出了一点发散的效果。

<img src="C:\Users\Sherloque\AppData\Roaming\Typora\typora-user-images\image-20210121152551058.png" style="width:70%">

​		界面右部分是使用**echarts**框架实现的世界地图，主要的目的是从地理角度提供对RCEP成员国概况的基本描述。地图界面可以通过鼠标拖拽或移动来聚焦于特定区域，并通过tooltip显示基本的数据属性——该国的GDP：

<img src="C:\Users\Sherloque\AppData\Roaming\Typora\typora-user-images\image-20210121105219365.png" alt="image-20210121105219365" style="zoom:70%;" />

## 3.2 界面2(view.html)

​		通过界面1的**NEXT**即可跳转至页面2（页面2相应的跳转则通过**BACK**实现），实现效果如图：

![image-20210121105302343](C:\Users\Sherloque\AppData\Roaming\Typora\typora-user-images\image-20210121105302343.png)

​		该界面的核心功能是对选定国家的经济状况进行对比，包含了三种视图：Line Chart，Radar Chart以及Drilldown Chart。界面左侧包含了交互组件，出于空间布局的考虑，我们只允许多选框选择2个或3个国家进行视图渲染，相应在下方添加选定国家的国旗作为指示。

​		中间位置的折线图对选定国家的特定经济数据类型进行展示，反映了近10年来该项经济指标的变化趋势，同时通过左上角的切换框，可以选择通过柱状图对限定时间范围内选定国家的经济数据的平均状况进行横向对比：

<img src="C:\Users\Sherloque\AppData\Roaming\Typora\typora-user-images\image-20210121105607815.png" alt="image-20210121105607815" style="width:50%;" align=left/><img src="C:\Users\Sherloque\AppData\Roaming\Typora\typora-user-images\image-20210121105647002.png" alt="image-20210121105647002" style="width:50%;" align=right/>

​		右侧的雷达图是对选定国家21类进出口商品的贸易额占比的展示（只选取了2016年的数据），通过左上方**legend**标签的排列次序对应国旗来指明国家，反映了各国进出口商品的构成状况的对比，突出了不同国家的经济结构的差异；而界面下方的Drilldown图表是单个国家占比最高的4类商品的分布状况，并通过图下方**Exports**和**Imports**按钮实现这两部分视图进/出口属性的切换。

​		同时通过鼠标单击某一商品对应的弧形可以切换到柱状图，具体查看这一类商品在2016年进/出口贸易额最多的5个国别/地区，反映了不同国家之间各类贸易商品的构成情况。

<img src="C:\Users\Sherloque\AppData\Roaming\Typora\typora-user-images\image-20210119225106649.png" alt="image-20210119225106649" style="width:50%;" /><img src="C:\Users\Sherloque\AppData\Roaming\Typora\typora-user-images\image-20210123222709568.png" style="width:50%;height:40" align=right>