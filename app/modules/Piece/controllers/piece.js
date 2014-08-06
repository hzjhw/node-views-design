/**
 * @description wide
 * @namespace wide
 * @author yongjin on 2014/7/24
 */

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/piece', {
        templateUrl: 'modules/Piece/views/piece.html'
    });
}]);
