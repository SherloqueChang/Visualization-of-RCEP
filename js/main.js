
/* * * * * * * * * * * * * * * * * * * * * * Page 2 Design * * * * * * * * * * * * * * * * * * * */

let country_dict = {'Australia':'0', 'Brunei':'1', 'Myanmar':'2', 'Cambodia':'3', 'China':'4', 'Indonesia':'5',
    'Japan':'6', 'Laos':'7', 'Malaysia':'8', 'New Zealand':'9', 'Philippines':'10', 'Singapore':'11',
    'South Korea':'12', 'Thailand':'13', 'Vietnam':'14'}

let country_list = ['Australia', 'Brunei', 'Myanmar', 'Cambodia', 'China', 'Indonesia',
    'Japan', 'Laos', 'Malaysia', 'New Zealand', 'Philippines', 'Singapore',
    'South Korea', 'Thailand', 'Vietnam'];

let attr_list = ['Gross Domestic Product billions of U.S. dollars',
    'GDP per capita current U.S. hundred dollars',
    'Exports of goods and services billion USD',
    'Imports of goods and services billion USD',
    'Exchange rate: local currency units per U.S. dollar',
    'Economic growth: the rate of change of real GDP'];

let attr_list1 = ['Gross Domestic Product billions of U.S. dollars',
    'GDP per capita current U.S. hundred dollars',
    'Exports of goods and services billion USD',
    'Imports of goods and services billion USD'];

let type_list = ["Animal Products","Vegetable Products","Animal and Vegetable Bi-Products","Foodstuffs","Mineral Products",
                "Chemical Products","Plastics and Rubbers","Animal Hides","Wood Products","Paper Goods","Textiles",
                "Footwear and Headwear","Stone And Glass","Precious Metals","Metals","Machines","Transportation","Instruments","Weapons",
                "Miscellaneous","Arts and Antiques"];

let cate_color = {"Animal Products": '#f1e7be',"Vegetable Products": '#DC143C',"Animal and Vegetable Bi-Products": '#00FFFF', "Foodstuffs": '#1b52db',
    "Mineral Products":'#22b6b6',"Chemical Products": '#ecbe4d',"Plastics and Rubbers": '#A9A9A9',"Animal Hides": '#006400',
    "Wood Products":'#BDB76B', "Paper Goods": '#f807f8',"Textiles":'#6ccc94', "Footwear and Headwear": '#a15d08',
    "Stone And Glass":'#752d99',"Precious Metals":'#8B0000', "Metals":'#46ab4c', "Machines":'#eea089',
    "Transportation":'#230c8b',"Instruments":'#a234a4',"Weapons":'#00fcff',"Miscellaneous":'#FF1493',
    "Arts and Antiques":'#9be38d'}

let color_list = ['#1ea3d3', '#b2b20b', '#b7b7ac', '#7d24b9',
    '#ba0f0f', '#e57f18', '#f38e8e', '#7ae110',
    '#6ce8da', '#921ca7', '#3be6b2', '#c99810',
    '#4f1f92', '#f50b5d', '#0c7b29'];

let color = '#d4e7f0';
let counter = 3;
let country1 = "China";
let country2 = "Japan";
let country3 = "South Korea";
let attr = attr_list[0];
let select_box = "exports";
let export_data = null;
let import_data = null;
let export_data_path = './data/RadarDataExports_Transpose.csv';
let import_data_path = './data/RadarDataImports_Transpose.csv';
let selected_countries = [4, 6, 12];

function draw_left() {
    let svg = d3.select("#left_tool")
        .append("svg")
        .attr("width", 250)
        .attr("height", 110)
        .append('g');
    svg.append('line')
        .attr('x1', 0)
        .attr('x2', 245)
        .attr('y1', 90)
        .attr('y2', 90)
        .attr('stroke-opacity', 0.8)
        .attr("stroke-width", 1.2)
        .attr("stroke", "#6c6a6a");
    svg.append('line')
        .attr('x1', 0)
        .attr('x2', 245)
        .attr('y1', 92)
        .attr('y2', 92)
        .attr('stroke-opacity', 0.8)
        .attr("stroke-width", 1.5)
        .attr("stroke", "#6c6a6a");
    svg.append('line')
        .attr('x1', 0)
        .attr('x2', 245)
        .attr('y1', 50)
        .attr('y2', 50)
        .attr('stroke-opacity', 0.8)
        .attr("stroke-width", 1.2)
        .attr("stroke", "#6c6a6a");
    svg.append('line')
        .attr('x1', 0)
        .attr('x2', 245)
        .attr('y1', 48)
        .attr('y2', 48)
        .attr('stroke-opacity', 0.8)
        .attr("stroke-width", 1.5)
        .attr("stroke", "#6c6a6a");

}

function draw_flag() {
    let flag_width = 140;
    let flag_height = 90;
    if(counter == 2) {
        let e = document.getElementById("flag");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div1.id = "country_f1";
        div2.id = "country_f2";
        div1.style.cssText = "width:140px;height:90px;background:#999999;position:absolute;left:50px;top:60px";
        div2.style.cssText = "width:140px;height:90px;background:#999999;position:absolute;left:50px;top:250px";
        e.appendChild(div1);
        e.appendChild(div2);
        d3.select('#country_f1')
            .append('img')
            .attr('width',flag_width)
            .attr('height',flag_height)
            .attr('src', './image/' + country1 + '.jpg');
        d3.select('#country_f2')
            .append('img')
            .attr('width',flag_width)
            .attr('height',flag_height)
            .attr('left',10)
            .attr('top',20)
            .attr('src', './image/' + country2 + '.jpg');
    } else {
        let e = document.getElementById("flag");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        div1.id = "country_f1";
        div2.id = "country_f2";
        div3.id = "country_f3";
        div1.style.cssText = "width:140px;height:90px;background:#999999;position:absolute;left:50px;top:30px";
        div2.style.cssText = "width:140px;height:90px;background:#999999;position:absolute;left:50px;top:170px";
        div3.style.cssText = "width:140px;height:90px;background:#999999;position:absolute;left:50px;top:310px";
        e.appendChild(div1);
        e.appendChild(div2);
        e.appendChild(div3);
        d3.select('#country_f1')
            .append('img')
            .attr('width',flag_width)
            .attr('height',flag_height)
            .attr('left',10)
            .attr('top',20)
            .attr('src', './image/' + country1 + '.jpg');
        d3.select('#country_f2')
            .append('img')
            .attr('width',flag_width)
            .attr('height',flag_height)
            .attr('left',10)
            .attr('top',20)
            .attr('src', './image/' + country2 + '.jpg');
        d3.select('#country_f3')
            .append('img')
            .attr('width',flag_width)
            .attr('height',flag_height)
            .attr('left',10)
            .attr('top',20)
            .attr('src', './image/' + country3 + '.jpg');
    }
}

function draw_single(country, div) {
    let flag = select_box === 'exports' ? 'Exports' : 'Imports';
    let file_name = 'data/goods/' + country + ' ' + flag + ' processed.csv';

    let total_value = 0;
    let data_point = [];
    let data_points = [[], [], [], []];
    let tmp = [];

    d3.csv(file_name, function (DATA) {
        data = DATA;

        data = data.filter((d, i) => (d['Year'] == 2016));
        for(let i = 0;i < data.length;i++){
            tmp.push({
                section: data[i]['Section'],
                value: data[i]['Trade Value']
            });
        }
        tmp.sort((a, b) => (b['value'] - a['value']));
        data_point = [
            { y: tmp[0]['value']/1000000000, name: tmp[0]['section'].substr(1, tmp[0]['section'].length - 2), color: cate_color[tmp[0]['section'].substr(1, tmp[0]['section'].length - 2)]},
            { y: tmp[1]['value']/1000000000, name: tmp[1]['section'].substr(1, tmp[1]['section'].length - 2), color: cate_color[tmp[1]['section'].substr(1, tmp[1]['section'].length - 2)] },
            { y: tmp[2]['value']/1000000000, name: tmp[2]['section'].substr(1, tmp[2]['section'].length - 2), color: cate_color[tmp[2]['section'].substr(1, tmp[2]['section'].length - 2)] },
            { y: tmp[3]['value']/1000000000, name: tmp[3]['section'].substr(1, tmp[3]['section'].length - 2), color: cate_color[tmp[3]['section'].substr(1, tmp[3]['section'].length - 2)] }
        ]

        data = DATA;
        for(let k = 0;k < 4;k++) {
            total_value += data_point[k]['y'];
        }

        data = DATA.filter((d, i) => (d['Country'] != ''));
        for(let k = 0;k < 4;k++) {
            total_value += data_point[k]['y'];
            for(let i = 0;i < data.length;i++) {
                if(data[i]['Section'] === tmp[k]['section']) {
                    data_points[k].push({
                        label: data[i]['Country'],
                        y: parseFloat(data[i]['Trade Value'])
                    });
                }
            }
        }
        console.log(data_points)
        let colomn_data = {};
        colomn_data[data_point[0]['name']] = [{
                color: cate_color[data_point[0]['name']],
                name: data_point[0]['name'],
                type: "column",
                dataPoints: data_points[0]
            }];
        colomn_data[data_point[1]['name']] = [{
                color: cate_color[data_point[1]['name']],
                name: data_point[1]['name'],
                type: "column",
                dataPoints: data_points[1]
            }];
        colomn_data[data_point[2]['name']] = [{
                color: cate_color[data_point[2]['name']],
                name: data_point[2]['name'],
                type: "column",
                dataPoints: data_points[2]
            }];
        colomn_data[data_point[3]['name']] = [{
                color: cate_color[data_point[3]['name']],
                name: data_point[3]['name'],
                type: "column",
                dataPoints: data_points[3]
            }];
        var visitorsData = {
            "Goods proportion": [{
                click: visitorsChartDrilldownHandler,
                cursor: "pointer",
                explodeOnClick: false,
                innerRadius: "75%",
                legendMarkerType: "square",
                name: "Goods proportion",
                radius: "100%",
                showInLegend: true,
                startAngle: 90,
                type: "doughnut",
                dataPoints: data_point
            }]
        };

        var newVSReturningVisitorsOptions = {
            animationEnabled: true,
            theme: 'light2',
            title: {
                text: country + "'s TOP 4 " + flag
            },
            subtitles: [{
                text: "Unit: Billions of dollars",
                backgroundColor: "#48b5d8",
                fontSize: 16,
                fontColor: "white",
                padding: 5
            }],
            legend: {
                fontFamily: "calibri",
                fontSize: 14,
                itemTextFormatter: function (e) {
                    return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / total_value * 100) + "%";
                }
            },
            data: []
        };

        var visitorsDrilldownedChartOptions = {
            animationEnabled: true,
            theme: "light2",
            axisX: {
                labelFontColor: "#717171",
                lineColor: "#a2a2a2",
                tickColor: "#a2a2a2"
            },
            axisY: {
                gridThickness: 0,
                includeZero: false,
                labelFontColor: "#717171",
                lineColor: "#a2a2a2",
                tickColor: "#a2a2a2",
                lineThickness: 1
            },
            data: []
        };

        var chart = new CanvasJS.Chart(div.id, newVSReturningVisitorsOptions);
        chart.options.data = visitorsData["Goods proportion"];
        chart.render();

        function visitorsChartDrilldownHandler(e) {
            chart = new CanvasJS.Chart(div.id, visitorsDrilldownedChartOptions);
            chart.options.data = colomn_data[e.dataPoint.name];
            chart.options.title = { text: e.dataPoint.name }
            chart.render();
        }

        $("#backButton").click(function() {
            chart = new CanvasJS.Chart(div.id, newVSReturningVisitorsOptions);
            chart.options.data = visitorsData["Goods proportion"];
            chart.render();
        });
    })
}

function draw_drill() {
    if(counter == 2) {
        let e = document.getElementById("drill-down");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div1.id = "country1";
        div2.id = "country2";
        div1.style.cssText = "width:500px;height:258px;background:#eeeeee;position:absolute;left:0px;top:0px";
        div2.style.cssText = "width:500px;height:258px;background:#eeeeee;position:absolute;left:500px;top:0px";
        e.appendChild(div1);
        e.appendChild(div2);
        draw_single(country1, div1);
        draw_single(country2, div2);

    } else {
        let e = document.getElementById("drill-down");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        div1.id = "country1";
        div2.id = "country2";
        div3.id = "country3";
        div1.style.cssText = "width:320px;height:258px;background:#eeeeee;position:absolute;left:0px;top:0px";
        e.appendChild(div1);
        draw_single(country1, div1);
        div2.style.cssText = "width:320px;height:258px;background:#eeeeee;position:absolute;left:320px;top:0px";
        e.appendChild(div2);
        draw_single(country2, div2);
        div3.style.cssText = "width:320px;height:258px;background:#eeeeee;position:absolute;left:640px;top:0px";
        e.appendChild(div3);
        draw_single(country3, div3);
    }
}

function RadarChart(id, data) {

    // Legend
    let color = d3.scale.ordinal()
        .range(["#fe4a49","#2ab7ca","#dbca44"]);
    let cfg = {
        w: 240,
        h: 240,
        margin: {top: 60, right: 80, bottom: 80, left: 90},
        levels: 5,
        maxValue: 0,
        labelFactor: 1.3, // 外围字的靠近程度,越大越远
        wrapWidth: 60,
        opacityArea: 0.35,
        dotRadius: 4,
        opacityCircles: 0.1,
        strokeWidth: 2,
        roundStrokes: true, // 外面的圈是圆润的
        color: color
    };


    //If the supplied maxValue is smaller than the actual one, replace by the max in the data
    let maxValue_real = Math.max(cfg.maxValue, d3.max(data, function(i){return d3.max(i.map(function(o){return o;}))}));
    let maxValue = Math.max(cfg.maxValue, d3.max(data, function(i){return d3.max(i.map(function(o){return Math.log(o*999 + 1);}))}));

    let allAxis = ["Animal Products", "Vegetable Products", "Animal and Vegetable Bi-Products", "Foodstuffs", "Mineral Products",
        "Chemical Products", "Plastics and Rubbers", "Animal Hides", "Wood Products", "Paper Goods", "Textiles", "Footwear and Headwear",
        "Stone And Glass", "Precious Metals", "Metals", "Machines", "Transportation", "Instruments", "Weapons", "Miscellaneous", "Arts and Antiques"]



    let total = 21,                 //The number of different axes
        radius = Math.min(cfg.w/2, cfg.h/2),    //Radius of the outermost circle
        Format = d3.format(),               //Percentage formatting
        angleSlice = Math.PI * 2 / total;       //The width in radians of each "slice"


    //Scale for the radius
    let rScale = d3.scale.linear()
        .domain([0, maxValue])
        .range([0, radius]);


    //Remove whatever chart with the same id/class was present before
    d3.select('#radar-chart-container').selectAll("svg").remove();
    d3.select('#radar-chart-container').select("rect").remove();

    //Initiate the radar chart SVG
    let svg = d3.select(id).append("svg")
        .attr("width",  cfg.w + cfg.margin.left + cfg.margin.right)
        .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
        .attr("class", "radar"+id);
    // g元素来控制SVG中各个元素的相对位置
    let g = svg.append("g")
        .attr("transform", "translate(" + (cfg.w/2 + cfg.margin.left) + "," + (cfg.h/2 + cfg.margin.top) + ")");


    //Filter for the outside glow
    let filter = g.append('defs').append('filter').attr('id','glow'),
        feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation','2.5').attr('result','coloredBlur'),
        feMerge = filter.append('feMerge'),
        feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
        feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');


    //Wrapper for the grid & axes
    let axisGrid = g.append("g").attr("class", "axisWrapper");

    // 白色圆圈
    axisGrid.selectAll(".levels")
        .data(d3.range(1,(cfg.levels+1)).reverse())
        .enter()
        .append("circle")
        .attr("class", "gridCircle")
        .attr("r", function(d, i){return radius/cfg.levels*d;})
        .style("fill", "#CDCDCD")
        .style("stroke", "#CDCDCD")
        .style("fill-opacity", cfg.opacityCircles)
        .style("filter" , "url(#glow)");


    // 白色圆环上的文字
    axisGrid.selectAll(".axisLabel")
        .data(d3.range(1,(cfg.levels+1)).reverse())
        .enter().append("text")
        .attr("class", "axisLabel")
        .attr("x", 4)
        .attr("y", function(d){return -d*radius/cfg.levels;})
        .attr("dy", "0.4em")
        .style("font-size", "10px")
        .attr("fill", "#737373")
        .text(function(d,i) {
            return (maxValue_real * d/cfg.levels * 100).toFixed(1) + "%";
        });



    //Create the straight lines radiating outward from the center
    let axis = axisGrid.selectAll(".axis")
        .data(allAxis)
        .enter()
        .append("g")
        .attr("class", "axis");
    //圆圈上的白线
    axis.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", function(d, i){ return rScale(maxValue*1.1) * Math.cos(angleSlice*i - Math.PI/2); })
        .attr("y2", function(d, i){ return rScale(maxValue*1.1) * Math.sin(angleSlice*i - Math.PI/2); })
        .attr("class", "line")
        .style("stroke", "white")
        .style("stroke-width", "2px");

    //坐标轴上的出口商品名称
    axis.append("text")
        .attr("class", "legend")
        .style("font-size", "8px")
        .attr("text-anchor", "middle")
        .attr("dy", "0.5em")
        .attr("x", function(d, i){
            if (d === "Transportation")
                return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2) - 10;
            if (d === "Animal and Vegetable Bi-Products")
                return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2) +7;
            if (d === "Animal Hides")
                return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2) +7;
            if (d === "Instruments")
                return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2) -7;
            return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2);
        })
        .attr("y", function(d, i){
            if (d === "Foodstuffs")
                return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2) + 3;
            if (d === "Weapons")
                return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2) + 3;
            if (d === "Instruments")
                return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2) ;
            if (d === "Miscellaneous")
                return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2);
            if (d === "Transportation")
                return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2) - 1;
            if (d === "Animal Hides")
                return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2)  - 8;
            return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2) - 10;
        })
        .text(function(d){
            if (d === "Animal Products")
                return "Animal and Products"
            return d})
        .call(wrap, cfg.wrapWidth);

    //The radial line function
    let radarLine = d3.svg.line.radial()
        .interpolate("linear-closed")
        .radius(function(d) {
            return rScale(Math.log(d*999 + 1));
        }) // 这里修改实际围起来的值
        .angle(function(d,i) {  return i*angleSlice; });

    // 这里让围起来的线变得圆润
    if(cfg.roundStrokes) {
        radarLine.interpolate("cardinal-closed");
    }

    //Create a wrapper for the blobs
    let blobWrapper = g.selectAll(".radarWrapper")
        .data(data)
        .enter().append("g")
        .attr("class", "radarWrapper");

    //Append the backgrounds
    blobWrapper
        .append("path")
        .attr("class", "radarArea")
        .attr("d", function(d,i) {
            return radarLine(d);
        })
        .style("fill", function(d,i) { return cfg.color(i); })
        .style("fill-opacity", cfg.opacityArea)
        .on('mouseover', function (d,i){
            //Dim all blobs
            d3.selectAll(".radarArea")
                .transition().duration(200)
                .style("fill-opacity", 0.1);
            //Bring back the hovered over blob
            d3.select(this)
                .transition().duration(200)
                .style("fill-opacity", 0.7);
        })
        .on('mouseout', function(){
            //Bring back all blobs
            d3.selectAll(".radarArea")
                .transition().duration(200)
                .style("fill-opacity", cfg.opacityArea);
        });

    //Create the outlines
    blobWrapper.append("path")
        .attr("class", "radarStroke")
        .attr("d", function(d,i) { return radarLine(d); })
        .style("stroke-width", cfg.strokeWidth + "px")
        .style("stroke", function(d,i) { return cfg.color(i); })
        .style("fill", "none")
        .style("filter" , "url(#glow)");

    //Append the circles
    blobWrapper.selectAll(".radarCircle")
        .data(function(d,i) { return d; })
        .enter().append("circle")
        .attr("class", "radarCircle")
        .attr("r", cfg.dotRadius)
        .attr("cx", function(d,i){ return rScale(Math.log(d*999 +1)) * Math.cos(angleSlice*i - Math.PI/2); }) // 修改点的位置
        .attr("cy", function(d,i){ return rScale(Math.log(d*999+1)) * Math.sin(angleSlice*i - Math.PI/2); }) // 修改点的位置
        .style("fill", function(d,i,j) { return cfg.color(j); })
        .style("fill-opacity", 0.8);


    //Wrapper for the invisible circles on top
    let blobCircleWrapper = g.selectAll(".radarCircleWrapper")
        .data(data)
        .enter().append("g")
        .attr("class", "radarCircleWrapper");

    //Append a set of invisible circles on top for the mouseover pop-up
    blobCircleWrapper.selectAll(".radarInvisibleCircle")
        .data(function(d,i) { return d; })
        .enter().append("circle")
        .attr("class", "radarInvisibleCircle")
        .attr("r", cfg.dotRadius*1.5)
        .attr("cx", function(d,i){ return rScale(Math.log(d*999 + 1)) * Math.cos(angleSlice*i - Math.PI/2); })
        .attr("cy", function(d,i){ return rScale(Math.log(d*999 +1)) * Math.sin(angleSlice*i - Math.PI/2); })
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function(d,i) {
            let newX = parseFloat(d3.select(this).attr('cx')) - 10;
            let newY = parseFloat(d3.select(this).attr('cy')) - 10;

            tooltip
                .attr('x', newX)
                .attr('y', newY)
                .text(Format(d))
                .transition().duration(200)
                .style('opacity', 1);
        })
        .on("mouseout", function(){
            tooltip.transition().duration(200)
                .style("opacity", 0);
        });

    //Set up the small tooltip for when you hover over a circle
    let tooltip = g.append("text")
        .attr("class", "tooltip")
        .style("opacity", 0);


    //Wraps SVG text
    function wrap(text, width) {
        text.each(function() {
            let text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.4, // ems
                y = text.attr("y"),
                x = text.attr("x"),
                dy = parseFloat(text.attr("dy")),
                tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
        });
    }

    /*************************** Legend ***************************************/

    for (let i=0; i<= selected_countries.length-1; i++){
        d3.select('.radar-chart-legend').attr("id","radar_legend").attr("position","absolute").append("svg").attr("width",20).attr("height",20)
            .append("rect").attr("width",10).attr("height",20).attr("rx", 4).attr("ry", 4)
            .style("fill",color(i));
    }
}

function draw_radar(flag) {

    select_box = flag;

    const export_data = [
        [0.067, 0.052, 0.002, 0.036, 0.498, 0.055, 0.006, 0.004, 0.008, 0.007, 0.020, 0.000, 0.001, 0.116, 0.059, 0.031, 0.019, 0.015, 0.000, 0.002, 0.000],
        [0.001, 0.000, 0.000, 0.001, 0.902, 0.031, 0.001, 0.001, 0.000, 0.001, 0.003, 0.000, 0.000, 0.009, 0.007, 0.027, 0.012, 0.003, 0.000, 0.001, 0.000],
        [0.039, 0.119, 0.000, 0.076, 0.415, 0.002, 0.017, 0.009, 0.033, 0.001, 0.163, 0.020, 0.000, 0.014, 0.032, 0.044, 0.006, 0.008, 0.000, 0.002, 0.000],
        [0.002, 0.042, 0.001, 0.007, 0.002, 0.007, 0.017, 0.025, 0.014, 0.001, 0.597, 0.116, 0.000, 0.098, 0.007, 0.029, 0.023, 0.007, 0.000, 0.007, 0.000],
        [0.006, 0.009, 0.000, 0.011, 0.011, 0.048, 0.040, 0.012, 0.007, 0.011, 0.104, 0.028, 0.017, 0.007, 0.074, 0.478, 0.035, 0.033, 0.000, 0.067, 0.000],
        [0.022, 0.021, 0.112, 0.039, 0.213, 0.061, 0.053, 0.004, 0.024, 0.038, 0.091, 0.042, 0.006, 0.039, 0.049, 0.111, 0.043, 0.013, 0.000, 0.018, 0.000],
        [0.003, 0.001, 0.000, 0.005, 0.015, 0.081, 0.055, 0.001, 0.000, 0.008, 0.013, 0.000, 0.010, 0.025, 0.081, 0.379, 0.248, 0.066, 0.000, 0.008, 0.001],
        [0.009, 0.155, 0.000, 0.094, 0.146, 0.069, 0.045, 0.001, 0.088, 0.001, 0.074, 0.011, 0.000, 0.062, 0.111, 0.115, 0.011, 0.004, 0.000, 0.004, 0.000],
        [0.006, 0.005, 0.052, 0.026, 0.137, 0.049, 0.057, 0.000, 0.016, 0.006, 0.014, 0.001, 0.007, 0.012, 0.042, 0.505, 0.012, 0.040, 0.000, 0.015, 0.000],
        [0.402, 0.076, 0.004, 0.124, 0.023, 0.066, 0.011, 0.010, 0.087, 0.029, 0.023, 0.001, 0.002, 0.013, 0.036, 0.054, 0.018, 0.017, 0.000, 0.004, 0.000],
        [0.007, 0.032, 0.016, 0.027, 0.038, 0.021, 0.018, 0.009, 0.013, 0.004, 0.028, 0.002, 0.003, 0.028, 0.036, 0.634, 0.025, 0.045, 0.001, 0.012, 0.000],
        [0.002, 0.002, 0.003, 0.031, 0.169, 0.132, 0.053, 0.002, 0.000, 0.009, 0.005, 0.001, 0.001, 0.060, 0.026, 0.416, 0.025, 0.060, 0.000, 0.002, 0.000],
        [0.003, 0.002, 0.000, 0.009, 0.056, 0.077, 0.072, 0.002, 0.000, 0.007, 0.026, 0.001, 0.006, 0.008, 0.082, 0.392, 0.193, 0.056, 0.001, 0.006, 0.001],
        [0.014, 0.043, 0.001, 0.075, 0.029, 0.045, 0.105, 0.006, 0.011, 0.008, 0.033, 0.004, 0.008, 0.053, 0.039, 0.347, 0.137, 0.031, 0.000, 0.012, 0.000],
        [0.028, 0.062, 0.001, 0.023, 0.024, 0.014, 0.030, 0.021, 0.014, 0.003, 0.167, 0.095, 0.008, 0.003, 0.035, 0.399, 0.014, 0.015, 0.000, 0.047, 0.000]
    ];
    const import_data = [
        [0.013, 0.012, 0.003, 0.046, 0.096, 0.093, 0.042, 0.007, 0.009, 0.017, 0.048, 0.010, 0.012, 0.041, 0.051, 0.252, 0.164, 0.045, 0.002, 0.037, 0.001],
        [0.041, 0.041, 0.005, 0.093, 0.097, 0.087, 0.033, 0.004, 0.004, 0.019, 0.027, 0.005, 0.022, 0.009, 0.122, 0.221, 0.115, 0.029, 0.001, 0.024, 0.000],
        [0.008, 0.028, 0.041, 0.119, 0.106, 0.072, 0.044, 0.004, 0.003, 0.018, 0.084, 0.007, 0.017, 0.004, 0.103, 0.206, 0.110, 0.013, 0.000, 0.013, 0.000],
        [0.009, 0.008, 0.004, 0.095, 0.100, 0.050, 0.040, 0.022, 0.004, 0.021, 0.220, 0.009, 0.016, 0.139, 0.054, 0.117, 0.073, 0.007, 0.000, 0.013, 0.000],
        [0.018, 0.044, 0.005, 0.016, 0.202, 0.079, 0.053, 0.006, 0.014, 0.018, 0.021, 0.002, 0.007, 0.047, 0.061, 0.261, 0.081, 0.061, 0.000, 0.004, 0.000],
        [0.018, 0.047, 0.002, 0.052, 0.145, 0.099, 0.063, 0.005, 0.003, 0.021, 0.062, 0.004, 0.008, 0.007, 0.097, 0.261, 0.071, 0.020, 0.004, 0.011, 0.000],
        [0.038, 0.031, 0.002, 0.037, 0.210, 0.094, 0.032, 0.007, 0.017, 0.009, 0.060, 0.011, 0.008, 0.017, 0.049, 0.253, 0.051, 0.048, 0.000, 0.025, 0.001],
        [0.052, 0.023, 0.002, 0.085, 0.123, 0.064, 0.036, 0.002, 0.002, 0.016, 0.033, 0.002, 0.020, 0.024, 0.124, 0.207, 0.163, 0.012, 0.000, 0.010, 0.000],
        [0.015, 0.029, 0.009, 0.037, 0.122, 0.074, 0.054, 0.004, 0.004, 0.014, 0.027, 0.005, 0.010, 0.020, 0.090, 0.373, 0.063, 0.035, 0.000, 0.013, 0.000],
        [0.014, 0.022, 0.006, 0.074, 0.089, 0.089, 0.052, 0.005, 0.007, 0.029, 0.052, 0.010, 0.014, 0.009, 0.052, 0.224, 0.180, 0.034, 0.001, 0.036, 0.001],
        [0.025, 0.029, 0.007, 0.049, 0.122, 0.066, 0.043, 0.004, 0.007, 0.017, 0.035, 0.006, 0.012, 0.003, 0.070, 0.353, 0.111, 0.023, 0.001, 0.018, 0.000],
        [0.011, 0.009, 0.003, 0.024, 0.198, 0.061, 0.024, 0.006, 0.002, 0.009, 0.013, 0.003, 0.005, 0.065, 0.041, 0.410, 0.069, 0.038, 0.000, 0.009, 0.001],
        [0.023, 0.020, 0.003, 0.023, 0.222, 0.088, 0.031, 0.008, 0.007, 0.009, 0.036, 0.007, 0.013, 0.008, 0.087, 0.295, 0.057, 0.048, 0.001, 0.014, 0.001],
        [0.020, 0.027, 0.002, 0.026, 0.124, 0.084, 0.052, 0.007, 0.003, 0.013, 0.026, 0.003, 0.010, 0.039, 0.126, 0.331, 0.065, 0.031, 0.001, 0.010, 0.000],
        [0.041, 0.052, 0.004, 0.046, 0.052, 0.070, 0.069, 0.012, 0.009, 0.016, 0.092, 0.004, 0.010, 0.002, 0.119, 0.306, 0.051, 0.032, 0.000, 0.011, 0.000]
    ];

    let mini_export_data = [];
    let mini_import_data = [];

    for (let i=0; i < selected_countries.length; i++){
        mini_export_data.push(export_data[selected_countries[i]]);
        mini_import_data.push(import_data[selected_countries[i]]);
    }


    if (select_box === "exports") {
        RadarChart(".radar-chart-graph", mini_export_data);
        d3.select('#drill-down').selectAll('*').remove();
        draw_drill();
    }
    else if (select_box === "imports"){
        RadarChart(".radar-chart-graph", mini_import_data);
        d3.select('#drill-down').selectAll('*').remove();
        draw_drill();
    }
}

function draw_line_bar() {

    // select-1
    $("#chart_style_1").change(function() {
        let val1 = $("#chart_style_1").val();
        let val2 = $("#chart_style_2").val()-1;
        let attr = attr_list[val2];

        // line chart
        if(val1 == 1) {
            d3.csv('data/data.csv', function (DATA) {
                data = DATA;
                data = data.filter((d, i) => ((d['Year'] >= 2000) && (d['Year'] <= 2018)));
                if (counter === 2)
                    data = data.filter((d, i) => (d['Country'] == country1 || d['Country'] == country2));
                else
                    data = data.filter((d, i) => (d['Country'] == country1 || d['Country'] == country2 || d['Country'] == country3));

                let country1_data = [], country2_data = [], country3_data = [];

                let year = 2000;
                for(let i = 0;i < data.length;i++) {
                    if(data[i]['Country'] == country1) {
                        country1_data.push([year, parseFloat(data[i][attr])]);
                    } else if(data[i]['Country'] == country2) {
                        country2_data.push([year, parseFloat(data[i][attr])]);
                    } else {
                        country3_data.push([year, parseFloat(data[i][attr])]);
                    }
                    year++;
                    if(year > 2018) year = 2000;
                }
                if(counter == 2) {
                    $('#line-chart').highcharts({
                        chart: {
                            zoomType: 'x'
                        },
                        title: {
                            text: ' '
                        },
                        xAxis: {
                            categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]
                        },
                        yAxis: {
                            title: {
                                text: ' '
                            }
                        },
                        plotOptions: {
                            area: {
                                fillColor: {
                                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                                    stops: [ [0, Highcharts.getOptions().colors[0]],
                                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                    ]
                                },
                                marker: {
                                    radius: 2
                                },
                                lineWidth: 1,
                                states: {
                                    hover: {
                                        lineWidth: 1
                                    }
                                },
                                threshold: null
                            }
                        },
                        series: [{
                                name: country1,
                                data: country1_data
                            }, {
                                name: country2,
                                data: country2_data
                            }]
                    });
                } else {
                    $('#line-chart').highcharts({
                        chart: {
                            zoomType: 'x'
                        },
                        title: {
                            text: ' '
                        },
                        xAxis: {
                            categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]
                        },
                        yAxis: {
                            title: {
                                text: ' '
                            }
                        },
                        plotOptions: {
                            area: {
                                fillColor: {
                                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                                    stops: [ [0, Highcharts.getOptions().colors[0]],
                                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                    ]
                                },
                                marker: {
                                    radius: 2
                                },
                                lineWidth: 1,
                                states: {
                                    hover: {
                                        lineWidth: 1
                                    }
                                },
                                threshold: null
                            }
                        },
                        series: [{
                                name: country1,
                                data: country1_data
                            }, {
                                name: country2,
                                data: country2_data
                            }, {
                                name: country3,
                                data: country3_data
                            }]
                    });
                }

            })
        } else {
            // bar chart
            d3.csv('data/data.csv', function (DATA) {
                data = DATA;
                data = data.filter((d, i) => (d['Year'] == 2018));
                if (counter === 2)
                    data = data.filter((d, i) => (d['Country'] == country1 || d['Country'] == country2));
                else
                    data = data.filter((d, i) => (d['Country'] == country1 || d['Country'] == country2 || d['Country'] == country3));
                let average1_data = [], average2_data = [], average3_data = [];
                let tmp = [0,0,0,0];
                let cnt = 0;
                for(let i = 0;i < data.length;i++) {
                    if(data[i]['Country'] == country1) {
                        for(let j = 0;j < 4;j++) {
                            if(j == 1) tmp[j] += data[i][attr_list1[j]]/100;
                            else tmp[j] += data[i][attr_list1[j]];
                        }
                        cnt++;
                    } else if((data[i]['Country'] == country2)) {
                        for(let j = 0;j < 4;j++) {
                            if(j == 1) tmp[j] += data[i][attr_list1[j]]/100;
                            else tmp[j] += data[i][attr_list1[j]];
                        }
                        cnt++;
                    } else {
                        for(let j = 0;j < 4;j++) {
                            if(j == 1) tmp[j] += data[i][attr_list1[j]]/100;
                            else tmp[j] += data[i][attr_list1[j]];
                        }
                        cnt++;
                    }
                    if(cnt == 1) {
                        for(let i = 0;i < 4;i++) {
                            average1_data.push(parseFloat(tmp[i]));
                        }
                    } else if(cnt == 2) {
                        for(let i = 0;i < 4;i++) {
                            average2_data.push(parseFloat(tmp[i]));
                        }
                    } else {
                        for(let i = 0;i < 4;i++) {
                            average3_data.push(parseFloat(tmp[i]));
                        }
                    }
                    tmp = [0,0,0,0];
                }
                if(counter == 2) {
                    $('#line-chart').highcharts({
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: ' '
                        },
                        xAxis: {
                            categories: attr_list1
                        },
                        yAxis: {
                            title: {
                                text: ' '
                            }
                        },
                        series: [{
                            name: country1,
                            data: average1_data
                            },
                            {
                            name: country2,
                            data: average2_data
                            }]
                    });
                } else {
                    $('#line-chart').highcharts({
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: ' '
                        },
                        xAxis: {
                            categories: attr_list1
                        },
                        yAxis: {
                            title: {
                                text: ' '
                            }
                        },
                        series: [
                            {
                                name: country1,
                                data: average1_data
                            },
                            {
                                name: country2,
                                data: average2_data
                            },
                            {
                                name: country3,
                                data: average3_data
                            }]
                    });
                }
            })
        }
    });
    $("#chart_style_1").trigger("change");

    // select-2
    $("#chart_style_2").change(function() {
        let val1 = $("#chart_style_1").val();
        let val2 = $("#chart_style_2").val()-1;
        let attr = attr_list[val2];

        // line chart
        if(val1 == 1) {
            d3.csv('data/data.csv', function (DATA) {
                data = DATA;
                data = data.filter((d, i) => ((d['Year'] >= 2000) && (d['Year'] <= 2018)));
                if (counter === 2)
                    data = data.filter((d, i) => (d['Country'] == country1 || d['Country'] == country2));
                else
                    data = data.filter((d, i) => (d['Country'] == country1 || d['Country'] == country2 || d['Country'] == country3));

                let country1_data = [], country2_data = [], country3_data = [];

                let year = 2000;
                for(let i = 0;i < data.length;i++) {
                    if(data[i]['Country'] == country1) {
                        country1_data.push([year, parseFloat(data[i][attr])]);
                    } else if(data[i]['Country'] == country2) {
                        country2_data.push([year, parseFloat(data[i][attr])]);
                    } else {
                        country3_data.push([year, parseFloat(data[i][attr])]);
                    }
                    year++;
                    if(year > 2018) year = 2000;
                }
                if(counter == 2) {
                    $('#line-chart').highcharts({
                        chart: {
                            zoomType: 'x'
                        },
                        title: {
                            text: ' '
                        },
                        xAxis: {
                            categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]
                        },
                        yAxis: {
                            title: {
                                text: ' '
                            }
                        },
                        plotOptions: {
                            area: {
                                fillColor: {
                                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                                    stops: [ [0, Highcharts.getOptions().colors[0]],
                                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                    ]
                                },
                                marker: {
                                    radius: 2
                                },
                                lineWidth: 1,
                                states: {
                                    hover: {
                                        lineWidth: 1
                                    }
                                },
                                threshold: null
                            }
                        },
                        series: [
                            {
                                name: country1,
                                data: country1_data
                            },
                            {
                                name: country2,
                                data: country2_data
                            }

                        ]
                    });
                } else {
                    $('#line-chart').highcharts({
                        chart: {
                            zoomType: 'x'
                        },
                        title: {
                            text: ' '
                        },
                        xAxis: {
                            categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]
                        },
                        yAxis: {
                            title: {
                                text: ' '
                            }
                        },
                        plotOptions: {
                            area: {
                                fillColor: {
                                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                                    stops: [ [0, Highcharts.getOptions().colors[0]],
                                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                    ]
                                },
                                marker: {
                                    radius: 2
                                },
                                lineWidth: 1,
                                states: {
                                    hover: {
                                        lineWidth: 1
                                    }
                                },
                                threshold: null
                            }
                        },
                        series: [
                            {
                                name: country1,
                                data: country1_data
                            },
                            {
                                name: country2,
                                data: country2_data
                            },
                            {
                                name: country3,
                                data: country3_data
                            }
                        ]
                    });
                }

            })
        } else {
            // bar chart
            d3.csv('data/data.csv', function (DATA) {
                data = DATA;
                data = data.filter((d, i) => (d['Year'] == 2018));
                if (counter === 2)
                    data = data.filter((d, i) => (d['Country'] == country1 || d['Country'] == country2));
                else
                    data = data.filter((d, i) => (d['Country'] == country1 || d['Country'] == country2 || d['Country'] == country3));

                let average1_data = [], average2_data = [], average3_data = [];
                let tmp = [0,0,0,0];
                let cnt = 0;
                for(let i = 0;i < data.length;i++) {
                    if(data[i]['Country'] == country1) {
                        for(let j = 0;j < 4;j++) {
                            if(j === 1) tmp[j] += (data[i][attr_list1[j]]/100);
                            else tmp[j] += data[i][attr_list1[j]];
                        }
                        year++;
                    } else if((data[i]['Country'] == country2)) {
                        for(let j = 0;j < 4;j++) {
                            if(j === 1) tmp[j] += (data[i][attr_list1[j]]/100);
                            else tmp[j] += data[i][attr_list1[j]];
                        }
                        year++;
                    } else {
                        for(let j = 0;j < 4;j++) {
                            if(j === 1) tmp[j] += (data[i][attr_list1[j]]/100);
                            else tmp[j] += data[i][attr_list1[j]];
                        }
                        year++;
                    }
                    if(cnt == 1) {
                        for(let i = 0;i < 4;i++) {
                            average1_data.push(parseFloat(tmp[i]));
                        }
                    } else if(cnt == 2) {
                        for(let i = 0;i < 4;i++) {
                            average2_data.push(parseFloat(tmp[i]));
                        }
                    } else {
                        for(let i = 0;i < 4;i++) {
                            average3_data.push(parseFloat(tmp[i]));
                        }
                    }
                    tmp = [0,0,0,0];
                }
                if(counter == 2) {
                    $('#line-chart').highcharts({
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: ' '
                        },
                        xAxis: {
                            categories: attr_list
                        },
                        yAxis: {
                            title: {
                                text: ' '
                            }
                        },
                        series: [{
                            name: country1,
                            data: average1_data
                        },
                            {
                                name: country2,
                                data: average2_data
                            }]
                    });
                } else {
                    $('#line-chart').highcharts({
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: ' '
                        },
                        xAxis: {
                            categories: attr_list
                        },
                        yAxis: {
                            title: {
                                text: ' '
                            }
                        },
                        series: [
                            {
                                name: country1,
                                data: average1_data
                            },
                            {
                                name: country2,
                                data: average2_data
                            },
                            {
                                name: country3,
                                data: average3_data
                            }]
                    });
                }
            })
        }
    });
    $("#chart_style_2").trigger("change");
}

function change_view() {
    let i = 0;
    $("#select option:selected").each(function () {
        i++;
    });
    if(i < 2) {
        alert("Select 2 countries at least !");
        return;
    } else if(i > 3) {
        alert("Select 3 countries at most !");
        return;
    }

    counter = i;
    i = 1;
    $("#select option:selected").each(function () {
        if(i === 1) {
            country1 = country_list[$(this).val()];i++;
        } else if(i === 2) {
            country2 = country_list[$(this).val()];i++;
        } else {
            country3 = country_list[$(this).val()];
        }
    })
    selected_countries = [];
    selected_countries.push(country_dict[country1]);
    selected_countries.push(country_dict[country2]);
    if(counter === 3) selected_countries.push(country_dict[country3]);

    d3.select("#line-chart").selectAll('*').remove();
    d3.select("#flag").selectAll('*').remove();
    d3.select('#drill-down').selectAll('*').remove();

    draw_line_bar();
    draw_flag();
    draw_radar(select_box);
}

function draw_main(){
    $(document).ready(function() {
        $('#example-getting-started').multiselect({
            buttonWidth: '248px',
            maxHeight: 150,
        });
    });
    $(document).ready(function() {
        $('#chart_style_1').multiselect({
            buttonWidth: '100px'
        });
    });
    $(document).ready(function() {
        $('#chart_style_2').multiselect({
            buttonWidth: '470px'
        });
    });

    draw_line_bar();
    draw_flag();
    draw_radar()
}

draw_main()