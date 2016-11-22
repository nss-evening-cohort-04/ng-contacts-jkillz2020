"use strict";
app.controller("NewContactCtrl", function($scope, $location, AddressFactory){
  $scope.newContact = {};

  $scope.addNewContact = function(){
    AddressFactory.postNewContact($scope.newContact).then(function(contactId){
      $location.url("/contacts/list");
    $scope.newContact= {};
    })
  }
})