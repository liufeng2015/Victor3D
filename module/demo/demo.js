/**
 * Created by LiuFeng on 2016/10/14.
 */
victor3D.controller("demoCtrl",['$scope','$element',function($scope,$element){
    var demoContainer = d3.select(".demo_container");
    var svg = demoContainer.append("svg").attr("class","demo_svg");
    //svg.append("circle").attr("cx",200).attr("cy",300).attr("r",50).attr("class","demo_circle");
    //svg.append("rect").attr("x",100).attr("y",200).attr("class","demo_rect");
    /*线性比例尺*/
    //var linear = d3.scale.linear()
    //                     .domain([0,100])
    //                     .range([0,300]);
    //var ordinal = d3.scale.ordinal()
    //    .domain([0,1,2,3,4])
    //    .range([10,11,12,13,14]);
    //
    //var xScale = d3.scale.ordinal()
    //                    .domain([0,1,2,3,4,5,6])
    //                    .rangeRoundBands([0,300]);
    //var xAxis = d3.svg.axis()
    //    .scale(xScale)
    //    .orient("bottom");
    //var gxAxis = svg.append("g")
    //    .attr("class","axis")
    //    .attr("transform","translate(30,300)")
    //    .call(xAxis);
    //var yAxis = d3.svg.axis()
    //    .scale(xScale)
    //    .orient("left");
    //var gyAxis = svg.append("g")
    //    .attr("class","axis")
    //    .attr("transform","translate(30,0)")
    //    .call(yAxis);
    //console.log(linear(50));
    //var svg = demoContainer.append("svg").attr("class","demo_svg");
    //var dataset = [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ];
    //var linear = d3.scale.linear()
    //    .domain([0, d3.max(dataset)])
    //    .range([0, 250]);
    //var rectHeight = 25;   //每个矩形所占的像素高度(包括空白)
    //
    //svg.selectAll("rect")
    //    .data(dataset)
    //    .enter()
    //    .append("rect")
    //    .attr("x",20)
    //    .attr("y",function(d,i){
    //        return i * rectHeight;
    //    })
    //    .attr("width",function(d){
    //        return linear(d);   //在这里用比例尺
    //    })
    //    .attr("height",rectHeight-2)
    //    .attr("fill","steelblue");
    /*var padding = {left:30,right:30,top:20,bottom:20};
    var dataSet = [10, 20, 30, 40, 33, 24, 12, 5];
    var xScale = d3.scale.ordinal()
        .domain(d3.range(dataSet.length))
        .rangeRoundBands([0,$element.prop("offsetWidth")-padding.left-padding.right]);
    var yScale = d3.scale.linear()
        .domain([0,d3.max(dataSet)])
        .range([$element.prop("offsetHeight")-padding.top-padding.bottom,0]);
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");
    svg.append("g")
        .attr("class","axis")
        .attr("transform","translate("+(padding.left)+","+($element.prop("offsetWidth")+2-padding.left-padding.right)+")")
        .call(xAxis);
    svg.append("g")
        .attr("class","axis")
        .attr("transform","translate("+(padding.left)+","+padding.top+")")
        .call(yAxis);

    var rectPadding = 10;
    var rects = svg.selectAll(".demo_rect")
        .data(dataSet)
        .enter()
        .append("rect")
        .attr("class","demo_rect")
        .attr("transform","translate("+padding.left+","+padding.top+")")
        .attr("x",function(d,i){
            return xScale(i)+rectPadding/2;
        })
        .attr("y",function(d){
            return yScale(d);
        })
        .attr("width",xScale.rangeBand()-rectPadding)
        .attr("height",function(d,i){
            return $element.prop("offsetHeight")-padding.top-2-padding.bottom-yScale(d);
        });
    var texts = svg.selectAll(".MyText")
        .data(dataSet)
        .enter()
        .append("text")
        .attr("class","MyText")
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .attr("x", function(d,i){
            return xScale(i) -2+ rectPadding/2;
        } )
        .attr("y",function(d){
            return yScale(d);
        })
        .attr("dx",function(){
            return (xScale.rangeBand() - rectPadding)/2;
        })
        .attr("dy",function(d){
            return 20;
        })
        .text(function(d){
            return d;
        });*/
    /*读取text文件*/
    //d3.text("demo.txt",function(error,txtdata){
    //    if(error)console.log(error);
    //    else console.log(txtdata);
    //});
    ///*读取json文件*/
    //d3.json("demo.json",function(error,jsondata){
    //    if(error)console.log(error);
    //    else console.log(jsondata);
    //});

    /*线段生成器*/
    //var dataLine = [{x:10,y:100},{x:20,y:200}];
    //var line = d3.svg.line()
    //    .x(function(d){
    //        return d.x;
    //    })
    //    .y(function(d){
    //        return d.y;
    //    })
    //    .interpolate("line");
    //svg.append("path")
    //    .attr("class","demo_path")
    //    .attr("d",line(dataLine))
    d3.json("line.json",function(error,jsondata){
        if(error)console.log(error);
        console.log(jsondata);
        //var xmax =
    })
}]);