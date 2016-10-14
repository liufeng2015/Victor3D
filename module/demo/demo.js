/**
 * Created by LiuFeng on 2016/10/14.
 */
victor3D.controller("demoCtrl",['$scope',function($scope){
    var demoContainer = d3.select(".demo_container");
    var svg = demoContainer.append("svg").attr("class","demo_svg");
    svg.append("circle").attr("cx",200).attr("cy",300).attr("r",50).attr("class","demo_circle");
    svg.append("rect").attr("x",100).attr("y",200).attr("class","demo_rect");
    
}]);