/**
 * Created by zzjz-pc15 on 2016/10/19.
 */
victor3D.controller("mapCtrl",["$scope","$element",'$http',function($scope,$element,$http){
    var mapContainer = d3.select(".chart_container");
    var svg = mapContainer.append("svg")
        .attr("class","map_svg");
    var padding = {left:20,right:20,top:20,bottom:20};
    var projection = d3.geo.mercator()
        .center([107,31])
        .scale(100)
        .translate([($element.prop("offsetWidth")-padding.left-padding.right)/2,($element.prop("offsetHeight")-padding.top-padding.bottom)/2]);
    var path = d3.geo.path()
        .projection(projection);

    var color = d3.scale.category20c();
    $http.get("module/charts/map/countrys/world.json").success(function(root){
        console.log(root.features);
        svg.selectAll("path")
            .data(root.features)
            .enter()
            .append("path")
            .attr("stroke","#000")
            .attr("stroke-width",1)
            .attr("fill",function(d,i){
                return color(i);
            })
            .attr("d",function(d){
                return path(d);
            })
            .on("mouseover",function(){
                d3.select(this)
                    .attr("fill","orange");
            })
            .on("mouseout",function(d,i){
                d3.select(this)
                    .attr("fill",color(i));
            })
    });


}]);