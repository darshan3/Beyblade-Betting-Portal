var app = angular.module('Beyblade', ['ngResource','ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/admin.html',
            controller: 'AdminCtrl',
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('AdminCtrl', ['$scope', '$resource', '$location', 
    function($scope, $resource, $location){
        var Users = $resource('/api/gamblers');
        console.log("getting data");
        Users.query(function(users){
            $scope.users = users;
        });

        $scope.adduser = function(){
        	console.log("adduser function called");
        	console.log($scope.newuser)
            var Users = $resource('/api/gamblers/insert');
            Users.save($scope.newuser, function(){
                $location.path('/');
            });
        };

        
    }]);

app.controller('AddUserCtrl', ['$scope', '$resource', '$location',
    function($scope, $resource, $location){
        $scope.adduser = function(){
        	console.log("adduser function called");
        	console.log($scope.newuser)
            var Users = $resource('/api/gamblers/insert');
            Users.save($scope.newuser, function(){
                $location.path('/');
            });
        };
    }]);