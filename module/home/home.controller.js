/**
 * Created by zzjz-pc15 on 2016/10/13.
 */
victor3D.controller("HomeCtrl",['$scope',function($scope){
    $scope.chartList = [
        {url:"bar",name:"柱状图"},
        {url:"pie",name:"饼状图"},
        {url:"map",name:"地图"},
        {url:"excel",name:"表格"}
    ];
    //console.log($scope);
}]);