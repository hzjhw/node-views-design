/**
 * @description layout
 * @namespace layout
 * @author yongjin on 2014/7/24
 */
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/layout', {
        templateUrl: 'modules/Layout/views/layout.html'
    });
}]);
