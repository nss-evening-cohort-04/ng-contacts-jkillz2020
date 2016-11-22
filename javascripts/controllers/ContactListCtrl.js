"use strict";

app.controller("ContactListCtrl", function($scope, AddressFactory){
  $scope.contacts = [];

  let getContacts = function(){
    AddressFactory.getContactList().then(function(fbContacts){
      $scope.contacts=fbContacts;
  })
}

getContacts();


  $scope.addNewContact = function(){
    AddressFactory.postNewContact($scope.newContact).then(function(contactId){
    getContacts();
    $scope.newContact= {};
    $scope.showListView = true;
    })
  }

  $scope.deleteContact = function(contactId){
    console.log("you deleted contact", contactId);
    AddressFactory.deleteContact(contactId).then(function(response){
      console.log("here now", response)
      getContacts();
    })
  }
})