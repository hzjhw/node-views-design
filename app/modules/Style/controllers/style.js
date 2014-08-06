/**
 * @description style
 * @namespace style
 * @author yongjin on 2014/7/24
 */
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/style', {
        templateUrl: 'modules/Style/views/style.html'
    });
}]);
