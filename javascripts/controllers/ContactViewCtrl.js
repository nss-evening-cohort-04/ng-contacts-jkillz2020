"use strict";

app.controller('ContactViewCtrl', function($scope, $routeParams, AddressFactory){
  $scope.selectedContact = {};
  let contactId = $routeParams.id;

  AddressFactory.getSingleContact(contactId).then(function(oneContact){
    oneContact.id=contactId
    $scope.selectedContact = oneContact;
  })
})