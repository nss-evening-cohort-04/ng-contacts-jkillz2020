"use strict";

app.controller('ContactEditCtrl', function($scope, $routeParams, $location, AddressFactory){
  $scope.newContact = {};
  let contactId = $routeParams.id;
  
  AddressFactory.getSingleContact(contactId).then(function(oneContact){
    oneContact.id= contactId;
    $scope.newContact = oneContact;
  })

  $scope.addNewContact = function(){
    AddressFactory.editContact($scope.newContact).then(function(response){
      $scope.newContact={};
      $location.url("/contacts/list")
    })
  }
})