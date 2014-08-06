/**
 * @description setting
 * @namespace setting
 * @author yongjin on 2014/7/24
 */
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/setting', {
        templateUrl: 'modules/Setting/views/setting.html'
    });
}]);
