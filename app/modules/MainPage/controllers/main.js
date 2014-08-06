/**
 * @description index
 * @namespace index
 * @author yongjin on 2014/7/24
 */

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'modules/MainPage/views/main.html'
    });
}])
app.controller('IndexCtrl', ['$scope', function($scope){

}]);