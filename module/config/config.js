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
    //$stateProvider
    //    .state('',{
    //
    //    })
    //    .state('',{
    //
    //    })
}]);