/**
 * Created by zzjz-pc15 on 2016/10/19.
 */
victor3D.controller("pieCtrl",["$scope","$element",'$document','$timeout',function($scope,$element,$document,$timeout){
    var pieContainer = d3.select(".chart_container");
    var svg = pieContainer.append("svg")
        .attr("class","pie_svg");
    var dataSet = [ 30 , 10 , 43 , 55,8,23 ];
    var pie = d3.layout.pie();
    var radiusSet = pie(dataSet);
    var padding = {left:20,right:20,top:20,bottom:20};
    var radius = d3.min([($element.prop("offsetHeight")-padding.top-padding.bottom)/2,($element.prop("offsetWidth")-padding.left-padding.right)/2]);
    var rHeight = ($element.prop("offsetHeight")-padding.top-padding.bottom-2*radius)/2;
    var rWidth = ($element.prop("offsetWidth")-padding.left-padding.right-2*radius)/2;
    var arc = d3.svg.arc()
        .innerRadius(0)
        .outerRadius(radius);
    var arcSize = d3.svg.arc()
        .innerRadius(0)
        .outerRadius(radius+15);
    var color = d3.scale.category10();
    var arcs = svg.selectAll("g")
        .data(radiusSet)
        .enter()
        .append("g")
        .attr("transform","translate("+(radius+padding.left+rWidth)+","+(radius+padding.top+rHeight)+")");

    arcs.append("path")
        .attr("fill","gray")
        .on("mouseover",function(d){
            d3.select(this)
                .attr("d",function(){
                    return arcSize(d);
                });
        })
        .on("mouseout",function(d){
            d3.select(this)
                .attr("d",function(){
                    return arc(d);
                });
            //svg.selectAll(".tip_group").remove()
        })
        .transition()
        .delay(function(d,i){
            return i*100;
        })
        .duration(800)
        .attr("fill",function(d,i){
            return color(i);
        })
        .attr("d",function(d){
            return arc(d);
        });
    arcs.append("text")
        .attr("transform",function(d,i){
            return "translate("+arc.centroid(d)+")"
        })
        .attr("text-anchor","middle")
        .attr("color","red")
        .text(function(d){
            return d.data;
        });
    d3.select(window)
        .on("resize",function(){
            radius = d3.min([($element.prop("offsetHeight")-padding.top-padding.bottom)/2,($element.prop("offsetWidth")-padding.left-padding.right)/2]);
            rHeight = ($element.prop("offsetHeight")-padding.top-padding.bottom-2*radius)/2;
            rWidth = ($element.prop("offsetWidth")-padding.left-padding.right-2*radius)/2;
            arc.outerRadius(radius);
            arcSize.outerRadius(radius+15);
            svg.selectAll("g").remove();
            arcs=svg.selectAll("g")
                .data(radiusSet)
                .enter()
                .append("g")
                .attr("transform","translate("+(radius+padding.left+rWidth)+","+(radius+padding.top+rHeight)+")");

            arcs.append("path")
                .attr("fill","gray")
                .on("mouseover",function(d,i,event){
                    d3.select(this)
                        .attr("d",function(){
                            return arcSize(d);
                        });
                })
                .on("mouseout",function(d){
                    d3.select(this)
                        .attr("d",function(){
                            return arc(d);
                        });
                    //svg.selectAll(".tip_group").remove();

                })
                .transition()
                .delay(function(d,i){
                    return (i+1)*100;
                })
                .duration(800)
                .attr("fill",function(d,i){
                    return color(i);
                })
                .attr("d",function(d){
                    return arc(d);
                });
            arcs.append("text")
                .attr("transform",function(d,i){
                    return "translate("+arc.centroid(d)+")"
                })
                .attr("text-anchor","middle")
                .attr("color","red")
                .text(function(d){
                    return d.data;
                });
        })
}]);