
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl',  function($scope, $http){
   console.log("Hello World from controller");



var refresh =function(){
  $http({ method: 'GET',
  url: '/reservation/reservationlist'
  })
  .then(function(response) {
    console.log("I got the data requested");
    console.log(response.data);
  $scope.reservationslist = response.data;
  //alert($scope.reservation.lastName);
  //  alert(reservation.lastName);
    //alert($scope.data);
    $scope.temp = angular.fromJson($scope.reservationslist)
    alert($scope.temp);
    console.log($scope.temp.reservations.firstName);
    });

  };

refresh();

});
