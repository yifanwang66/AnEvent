var myApp = angular.module('myApp', ['ngStorage','ngRoute']);
myApp.factory('myService', function() {
   var myList = [];
   var set = function(newObj) {
      myList.push(newObj);
  }

  var get = function(){
      return myList;
  }

  return {
    set: set,
    get: get
  };

});


myApp.controller('AppCtrl', ['$scope',  '$http', '$window', 'myService' , function($scope, $http, $window, myService) {
	$http.get('/eventlist').then(function(response){
		console.log("get data in controller");
    console.log(response);
   // You will get the above response here  in response.data
    $scope.events = response.data;

  });

$scope.AddEventPage = function(){
    console.log("redirecting...");
    $window.location.href = '/EventOrder.html';
  };

  $scope.AddEvent = function(){
    console.log($scope.event);
    $http.post('/eventlist', $scope.event).then(function(response){
      console.log(response);
      console.log("success");
      $window.location.href = '/index.html';
    });
  };
$scope.EventDetails = function(event){
    console.log("get event");
    $scope.selectedevent = event;
    //myService.set(event);
    console.log(event);

    $scope.myvalue = true;  
    $scope.joineventvisible = false;
    $scope.joineventdone = false;  
    
    //$window.location.href = '/eventdetails.html';
  };

  $scope.JoinEvent = function(event){
    
    
    //myService.set(event);
    console.log(event);
    $scope.joiningevent = event;
    $scope.joineventvisible = true;  
    
    
    //$window.location.href = '/eventdetails.html';
  };

  $scope.UserJoin = function(){
    var userjoiningevent = {
      username : "test",
      event_id : $scope.joiningevent._id,
      event_name : $scope.joiningevent.name
    } ;
   
    //myService.set(event);
    $http.post('/userevent', userjoiningevent).then(function(response){
      console.log(response);
      console.log("success");
      $scope.joineventvisible = false; 
      $scope.joineventdone = true;  
    });
    
    //$window.location.href = '/eventdetails.html';
  };

	
  
	
}]);

/*myApp.controller('EventDCtrl', ['$scope',  '$http', '$window', 'myService' , function($scope, $http, $window, myService) {

   $scope.selectedevent = myService.get();
  
    console.log("second controller");
    console.log($scope.event);
}]);*/