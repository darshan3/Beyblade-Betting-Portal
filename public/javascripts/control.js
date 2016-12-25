var app = angular.module('Beyblade', ['ngResource','ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/admin.html',
            controller: 'AdminCtrl',
        })
        .when('/users', {
            templateUrl: 'partials/users.html',
            controller: 'UsersCtrl',
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
app.controller('UsersCtrl', ['$scope', '$resource', '$location', 
    function($scope,$resource,$location){
        var range = [];
         for(var i=10;i<=100;i++)
             range.push(i);
        $scope.range = range;
        console.log($scope.bet1);

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
