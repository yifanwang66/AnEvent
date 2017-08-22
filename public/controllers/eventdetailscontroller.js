var myApp = angular.module('myApp', ['ngStorage','ngRoute']);
myApp.factory('myService', function() {
   var savedData = {}
   function set(data) {
     savedData = data;
   }
   function get() {
    return savedData;
   }

   return {
    set: set,
    get: get
   }

});

myApp.controller('EventDCtrl', ['$scope',  '$http', '$window', 'myService' , function($scope, $http, $window, myService) {
	
  $scope.event = myService.get();
  console.log( myService.get());

	app.service('myService', function($q,$compile,$http) {
    this.getData = function() {
        var promise = $http.get('myfile.php');
        promise = promise.then(function (response) {
            return response.data;
        });
        return promise;
    };
});
  
	
}]);

