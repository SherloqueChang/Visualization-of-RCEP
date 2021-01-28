let file = './data/sunburst_data.csv';

let country_dict = {'Australia':'0', 'Brunei':'1', 'Myanmar':'2', 'Cambodia':'3', 'China':'4', 'Indonesia':'5',
    'Japan':'6', 'Laos':'7', 'Malaysia':'8', 'New Zealand':'9', 'Philippines':'10', 'Singapore':'11',
    'South Korea':'12', 'Thailand':'13', 'Vietnam':'14'}

let country_list = ['Australia', 'Brunei', 'Myanmar', 'Cambodia', 'China', 'Indonesia',
    'Japan', 'Laos', 'Malaysia', 'New Zealand', 'Philippines', 'Singapore',
    'South Korea', 'Thailand', 'Vietnam'];

let color_list = ['#1ea3d3', '#b2b20b', '#a8a8a0', '#7d24b9',
    '#ba0f0f', '#e57f18', '#f38e8e', '#7ae110',
    '#6ce8da', '#921ca7', '#3be6b2', '#c99810',
    '#4f1f92', '#f50b5d', '#0c7b29'];

function draw_sbt() {
    d3.csv(file, csvdata => ({
        departure_continent: csvdata.departure_continent + '1',
        departure_country: csvdata.departure_country + '2',
        landing_continent: csvdata.landing_continent + '1',
        landing_country: csvdata.landing_country + '2',
    })).then(data => {
        console.log(data);
        let root = { name: 'root', value: 0, children: []};

        for(let i = 0; i < data.length;i++) {
            let current = root, j;
            for(j = 0;j < current.children.length;j++) {
                if(current.children[j].name == data[i].departure_continent) {
                    break;
                }
            }
            if (j === current.children.length)
                current.children.push({name: data[i].departure_continent, value: 0, children: [], color: j});
            current = current.children[j];

            for (j = 0; j < current.children.length; j++)
                if (current.children[j].name === data[i].departure_country)
                    break;
            if (j === current.children.length)
                current.children.push({name: data[i].departure_country, value: 1, children: []});
            current = current.children[j];

            current = root;
            for (j = 0; j < current.children.length; j++)
                if (current.children[j].name === data[i].landing_continent)
                    break;
            if (j === current.children.length)
                current.children.push({name: data[i].landing_continent, value: 0, children: [], color: j});
            current = current.children[j];

            for (j = 0; j < current.children.length; j++)
                if (current.children[j].name === data[i].landing_country)
                    break;
            if (j === current.children.length)
                current.children.push({name: data[i].landing_country, value: 1});
        }

        let partition = data => d3.partition()
            .size([2 * Math.PI, 96])
            (d3.hierarchy(data).sum(d => d.value));

        root = partition(root);
        let node = root.descendants();

        console.log(root);

        let svg = d3.select("#left")
            .append("svg")
            .attr("width", 670)
            .attr("height", 560)
            .attr("font", "10px sans-serif");

        let arc = d3.arc()
            .startAngle(d => d.x0)
            .endAngle(d => d.x1)
            .padAngle(0.005)
            .padRadius(300)
            .innerRadius(d => 278 - d.y1)
            .outerRadius(d => {
                if (d.depth <= 1) return 278 - d.y0;
                return 277 - d.y0;
            });

        let g = svg.append("g")
            .attr("transform", "translate(320, 300)");

        g.selectAll("path")
            .data(node.filter(d => d.depth))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill-opacity", d => 1.5 - d.depth * 0.66)
            .attr("fill", d => {
                let col;
                if(d.depth <= 1) {
                    if(d.data.name == 'Asia1') col = '#a9e6ac';
                    else col = "#6fb6e5";
                } else {
                    col = color_list[country_dict[d.data.name.substr(0,d.data.name.length-1)]];
                }
                d.data.color = col;
                return col;
            })
            .on("mouseover", overed)
            .on("mouseout", outed);

        g.append("text")
            .text("TOP 5 Trade Partners")
            .attr('transform', 'translate(-120,-275)')
            .attr('font-size', 24)
        g.append('line')
            .attr('x1',-310)
            .attr('x2',340)
            .attr('y1',-265)
            .attr('y2',-265)
            .attr('stroke-opacity', 0.7)
            .attr("stroke-width", 1)
            .attr("stroke", "#6c6a6a")
        g.append('line')
            .attr('x1',-310)
            .attr('x2',340)
            .attr('y1',-262)
            .attr('y2',-262)
            .attr('stroke-opacity', 0.7)
            .attr("stroke-width", 1.3)
            .attr("stroke", "#6c6a6a")

        let text = svg.append("g")
            .style("user-select", "none")
            .attr("transform", "translate(320, 300)")
            .attr("text-anchor", "middle");

        text.selectAll("text")
            .data(node.filter(d => d.depth))
            .enter()
            .append("text")
            .attr("transform", function (d) {
                const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
                let y = 580 - (d.y0 + d.y1) * 1.1;
                return `rotate(${x - 90}) translate(${y*0.48},0) rotate(${x < 180 ? 90 : 90})`;
            })
            .attr("font-size", d => {
                if (d.depth > 1) return 11;
                return 15
            })
            .attr('dy', '0.35em')
            .text(d => d.data.name.substr(0, d.data.name.length - 1))
            .on("mouseover", overed)
            .on("mouseout", outed);

        for (let i = 0; i < node.length; i++) {
            let x = (node[i].x1 + node[i].x0 - Math.PI) / 2;
            let y = (node[i].y0 + node[i].y1) / 310 * 350;
            node[i].x = y * Math.cos(x);
            node[i].y = y * Math.sin(x);
        }

        console.log(node);

        let line = d3.line()
            .curve(d3.curveBasis)
            .y(d => d.y)
            .x(d => d.x);
        let p = [];
        let beta = 0.5;
        let link = svg.append("g")
            .attr("stroke", "#ccc")
            .attr("fill", "none")
            .attr("transform", "translate(320, 300)");
        let link_ = link.selectAll("path")
            .data(data)
            .join("path")
            .style("mix-blend-mode", "multiply")
            .attr("d", d => {
                for (let i = 0; i < p.length; i++)
                    if (p[i] == d.departure_country + d.landing_country)
                        return;
                p.push(d.departure_country + d.landing_country);
                let path_name;
                if (d.departure_continent == d.landing_continent)
                    path_name = [d.departure_country, d.departure_continent, d.landing_country];
                else
                    path_name = [d.departure_country,d.departure_continent, 'root', d.landing_continent, d.landing_country];
                for (let i = 0; i < path_name.length; i++)
                    for (let j = 0; j < node.length; j++)
                        if (path_name[i] === node[j].data.name)
                            path_name[i] = {x: node[j].x, y: node[j].y};
                for (let i = 0; i < path_name.length; i++) {
                    path_name[i].x = beta * path_name[i].x + (1 - beta) * (path_name[0].x +
                        i / (path_name.length - 1) * (path_name[path_name.length - 1].x - path_name[0].x));
                    path_name[i].y = beta * path_name[i].y + (1 - beta) * (path_name[0].y +
                        i / (path_name.length - 1) * (path_name[path_name.length - 1].y - path_name[0].y));
                }
                return line(path_name)
            });

        function overed(d) {
            let k = [];
            link_.style("mix-blend-mode", null);
            link.selectAll('path')
                .filter(function (d1) {
                    let bool = d1.departure_country === d.data.name || d1.departure_continent === d.data.name;
                    if (bool) {
                        k.push(d1.departure_country);
                    }
                    return bool;
                }).attr("stroke", '#09f').raise();
            text.selectAll('text')
                .filter(function (d1) {
                    if (d1.depth > 1)
                        for (let i = 0; i < k.length; i++)
                            if (k[i] === d1.data.name)
                                return false;
                    return !(d.data.name === d1.data.name && d.data.depth === d1.data.depth ||
                        d.data.name === d1.parent.data.name && d.data.depth === d1.parent.data.depth);
                }).transition()
                .duration(500).attr("fill-opacountry", 0.2);
            g.selectAll('path')
                .filter(function (d1) {
                    if (d1.depth > 1)
                        for (let i = 0; i < k.length; i++)
                            if (k[i] === d1.data.name)
                                return false;
                    return !(d.data.name === d1.data.name && d.data.depth === d1.data.depth ||
                        d.data.name === d1.parent.data.name && d.data.depth === d1.parent.data.depth);
                }).transition()
                .duration(500).attr("fill-opacountry", 0.1);
        }

        function outed(d) {
            link_.style("mix-blend-mode", "multiply");
            link.selectAll('path').attr("stroke", '#ccc');
            text.selectAll('text')
                .transition()
                .duration(300)
                .attr("fill-opacountry", 1);
            g.selectAll('path')
                .transition()
                .duration(300)
                .attr("fill-opacountry", d => 0.9 - d.depth * 0.2)
        }

        let range = d3.select('#ran');
        range.on("mousemove", function (d) {
            let beta = document.getElementById("ran").value;
            let p = [];
            link_.attr("d", d => {
                for (let i = 0; i < p.length; i++)
                    if (p[i] === d.departure_country + d.landing_country)
                        return;
                p.push(d.departure_country + d.landing_country);
                let path_name;
                if (d.departure_continent === d.landing_continent)
                    path_name = [d.departure_country, d.departure_continent, d.landing_country];
                else
                    path_name = [d.departure_country, d.departure_continent,
                        'root', d.landing_continent, d.landing_country];
                for (let i = 0; i < path_name.length; i++)
                    for (let j = 0; j < node.length; j++)
                        if (path_name[i] === node[j].data.name)
                            path_name[i] = {x: node[j].x, y: node[j].y};
                for (let i = 0; i < path_name.length; i++) {
                    path_name[i].x = beta * path_name[i].x + (1 - beta) * (path_name[0].x +
                        i / (path_name.length - 1) * (path_name[path_name.length - 1].x - path_name[0].x));
                    path_name[i].y = beta * path_name[i].y + (1 - beta) * (path_name[0].y +
                        i / (path_name.length - 1) * (path_name[path_name.length - 1].y - path_name[0].y));
                }
                return line(path_name)
            });
        });
    })
}

function draw_main() {
    draw_sbt();
}

draw_main()

