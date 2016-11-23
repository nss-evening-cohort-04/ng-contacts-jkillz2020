"use strict";
app.controller("NewContactCtrl", function($scope, $location, $rootScope, AddressFactory){
  $scope.newContact = {};

  $scope.addNewContact = function(){
    $scope.newContact.uid = $rootScope.user.uid;
    AddressFactory.postNewContact($scope.newContact).then(function(contactId){
      $location.url("/contacts/list");
    $scope.newContact= {};
    })
  }
})