/**
 * Created by LiuFeng on 2016/10/14.
 */
victor3D.controller("barCtrl",['$scope','$element',function($scope,$element){
    var barContainer = d3.select(".chart_container");
    var svg = barContainer.append("svg").attr("class","bar_svg");
    var padding = {left:40,right:40,top:40,bottom:40};
    var dataSet = [4,34,56,23,13,44];
    var dataColor = ["red","blue","orange","purple","yellow","green"];
    var xScale = d3.scale.ordinal()
        .domain(dataColor)
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
    var xg = svg.append("g")
        .attr("class","axis")
        .attr("transform","translate("+padding.left+","+($element.prop("offsetHeight")-padding.top)+")")
        .call(xAxis);
    var yg = svg.append("g")
        .attr("class","axis")
        .attr("transform","translate("+padding.left+","+padding.top+")")
        .call(yAxis);
    var rectPadding =8;
    var rect = svg.selectAll("rect")
        .data(dataSet)
        .enter()
        .append("rect")
        .attr("fill","red")
        .attr("transform","translate("+padding.left+","+padding.top+")")
        .attr("x",function(d,i){
            return xScale(dataColor[i])+rectPadding/2;
        })
        .attr("width",xScale.rangeBand()-rectPadding)
        .on("mouseover",function(d,i){
            d3.select(this)
                .transition()
                .duration(400)
                .attr("fill","orange");
        })
        .on("mouseout",function(d,i){
            d3.select(this)
                .transition()
                .duration(200)
                .attr("fill","blue")
        })
        .on("click",function(){
            alert("hello")
        })
        .attr("height",0)
        .attr("y",function(d){
            var min = yScale.domain()[0];
            return yScale(min);
        })
        .transition()
        .delay(function(d,i){
            return i*100;
        })
        .duration(100)
        .attr("fill","green")
        .transition()
        .delay(function(d,i){
            return i*200;
        })
        .duration(2000)
        .ease("bounce")
        .attr("y",function(d){
            return yScale(d);
        })
        .attr("height",function(d){
            return $element.prop("offsetHeight")-yScale(d)-padding.top-padding.bottom;
        })
        .attr("fill","blue");
    d3.select(window)
        .on("resize",function(){
            xScale.rangeRoundBands([0,$element.prop("offsetWidth")-padding.left-padding.right]);
            yScale.range([$element.prop("offsetHeight")-padding.top-padding.bottom,0]);
            xAxis.scale(xScale);
            yAxis.scale(yScale);
            xg.attr("transform","translate("+padding.left+","+($element.prop("offsetHeight")-padding.top)+")")
                .call(xAxis);
            yg.attr("transform","translate("+padding.left+","+padding.top+")")
                .call(yAxis);
            svg.selectAll("rect").remove();
            svg.selectAll("rect")
                .data(dataSet)
                .enter()
                .append("rect")
                .attr("fill","red")
                .attr("transform","translate("+padding.left+","+padding.top+")")
                .attr("x",function(d,i){
                    return xScale(dataColor[i])+rectPadding/2;
                })
                .attr("width",xScale.rangeBand()-rectPadding)
                .on("mouseover",function(d,i){
                    d3.select(this)
                        .transition()
                        .duration(400)
                        .attr("fill","orange");
                })
                .on("mouseout",function(d,i){
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .attr("fill","blue")
                })
                .on("click",function(){
                    alert("hello")
                })
                .attr("height",0)
                .attr("y",function(d){
                    var min = yScale.domain()[0];
                    return yScale(min);
                })
                .transition()
                .delay(function(d,i){
                    return i*100;
                })
                .duration(100)
                .attr("fill","green")
                .transition()
                .delay(function(d,i){
                    return i*200;
                })
                .duration(2000)
                .ease("bounce")
                .attr("y",function(d){
                    return yScale(d);
                })
                .attr("height",function(d){
                    return $element.prop("offsetHeight")-yScale(d)-padding.top-padding.bottom;
                })
                .attr("fill","blue");
        })
}]);