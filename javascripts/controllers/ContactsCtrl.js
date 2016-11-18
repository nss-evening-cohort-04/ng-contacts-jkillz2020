"use strict";

app.controller('ContactsCtrl', function($scope, AddressFactory){
  $scope.welcome = "hello"
  $scope.showContactsView = true;
  $scope.newContact = {};
  $scope.contacts = [];

  let getContacts = function(){
AddressFactory.getContactList().then(function(fbContacts){
      $scope.contacts=fbContacts;
    })
  }

getContacts();

 $scope.allContacts = function(){
  console.log("you clicked show all contacts");
  $scope.showContactsView = true;
 }
 $scope.newContact = function(){
  console.log("you clicked add new contact");
  $scope.showContactsView = false;
 }

 $scope.addNewContact = function(){
  AddressFactory.postNewContact($scope.newContact).then(function(contactId){
  getContacts();
  $scope.newContact = {};
  $scope.showContactsView = true;
  })
 }
})