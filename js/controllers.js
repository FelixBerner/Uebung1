'use strict';
app.controller('ListeCtr', ['$scope', '$routeParams',
  function($scope) {
    //Personenliste erstellen
    $scope.persons = [];

    $scope.addPerson = function() {
      //Daten in die Liste eintragen
      $scope.persons.push({
        vorName: $scope.newVName,
        nachName: $scope.newNName,
        gebDatum: $scope.newGebDat
      });
      //Eingabefelder zurücksetzen
      $scope.newVName = '';
      $scope.newNName = '';
      $scope.newGebDat = '';
    }
  }
]);
app.controller('InhaltCtrl', function($scope, $http) {
  $http.get('inhalt/jumbos.json').then(function(contentResponse) {
    console.log(contentResponse);
    $scope.contents = contentResponse.data.jumbos;
    $scope.next = function(e) {
      console.log('next');
      $('.carousel').carousel('next');
    }
    $scope.prev = function(e) {
      console.log('previous');
      $('.carousel').carousel('prev');
    }
    $('.carousel').carousel();
    $scope.active = function(first) {
      if (first) {
        return "active";
      } else {
        return "";
      }
    }
  });
});
