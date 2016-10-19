/**
 * Created by zzjz-pc15 on 2016/10/13.
 */
victor3D.config(['$routeProvider','$stateProvider',function($routeProvider,$stateProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'module/home/home.html',
            controller: 'HomeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $stateProvider
        .state('bar',{
            url: '/bar',
            template: '<div class="chart_container"></div>',
            controller:"barCtrl"
        })
        .state('excel',{
            url: '/excel',
            template: '<div class="chart_container"></div>',
            controller:"excelCtrl"
        })
        .state('pie',{
            url: '/pie',
            template: '<div class="chart_container"></div>',
            controller:"pieCtrl"
        })
        .state('map',{
            url: '/map',
            template: '<div class="chart_container"></div>',
            controller:"mapCtrl"
        })
        //.state('',{
        //
        //})
}]);