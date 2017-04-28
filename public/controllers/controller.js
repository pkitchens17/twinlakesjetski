
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl',  function($scope, $http){
   console.log("Hello World from controller");

//common error function
var onError = function (error){
  $scope.error = error.data;
};

/*
//unused function that could be implemented in the refresh function
var onReservationGetCompleted = function(response){
  $scope.reservations = response.data;
  console.log($scope.reservations);
}



var refresh = function(){
  $http.get('/reservation/reservationlist')
  .then(onReservationGetCompleted, onError);
console.log('Response received...');
}

refresh();

*/
//geting all reservations
var refresh =function(){
  $http({ method: 'GET',
  url: '/reservation/reservationlist'
  })
  .then(function(response) {
    console.log("I got the data requested");
    console.log(response.data);
  $scope.reservationslist = [];
  response.data.forEach(function(data){
    $scope.reservationslist.push(data.reservations);

  });
  //alert($scope.reservationslist.toString());

  $scope.reservation= [];
  //alert($scope.reservation.lastName);
  //  alert(reservation.lastName);
    //alert($scope.data);
  //  $scope.temp = angular.fromJson($scope.reservationslist)
  //  alert($scope.temp);
    //console.log($scope.temp.reservations.firstName);


/*
    angular.forEach($scope.reservationslist.data, function(value, key){
      this.push(key + value);
    }, log);
    });
    */

  });
};

refresh();
//////////////////////////////////////////////////////////////////


//get reservation by id
var onGetByIdCompleted = function(response){
  $scope.reservations = response.data;
  console.log(response.data);
};

$scope.searchReservation = function(id){
  $http.get('/reservation/reservation/' + id)
            .then(onGetByIdCompleted, onError);
        console.log(id);
};
//end of get reservation by id


//delete reservation
$scope.deleteReservation = function(id){
  var idstring = JSON.stringify(id);
  console.log(id);
    $http.delete('/reservation/deletereservation/' + id);
refresh();
        //.then(onReservationDeleteCompleted,  onError);

  //  console.log(id);
};

//Curently an unsued callback function.
var onReservationDeleteCompleted = function(response){
    $scope.reservations = response.data;
    console.log(response.data);
    refresh();
};
//end delete reservation


//update reservations
$scope.updateReservation = function(id, firstName){
  var namestring = JSON.stringify(id);
  console.log(namestring);
    $http.put("/reservation/updatereservation/" + id +"/"+ firstName)
        .then(onUpdateReservationCompleted, onError);
            console.log(id);
};

var onUpdateReservationCompleted = function(response){
    $scope.reservations = null;//response.data;
    console.log(response.data);
    refresh();
};
//end update person





});
