"use strict";

app.controller("ContactListCtrl", function($scope, $rootScope, AddressFactory){
  $scope.contacts = [];

  let getContacts = function(){
    AddressFactory.getContactList($rootScope.user.uid).then(function(fbContacts){
      $scope.contacts=fbContacts;
  })
}

getContacts();

  $scope.deleteContact = function(contactId){
    console.log("you deleted contact", contactId);
    AddressFactory.deleteContact(contactId).then(function(response){
      console.log("here now", response)
      getContacts();
    })
  }
})