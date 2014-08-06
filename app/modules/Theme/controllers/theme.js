/**
 * @description theme
 * @namespace theme
 * @author yongjin on 2014/7/24
 */
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/theme', {
        templateUrl: 'modules/Theme/views/theme.html'
    });
}]);
