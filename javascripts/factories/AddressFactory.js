"use strict";

app.factory('AddressFactory', function($q, $http, FIREBASE_CONFIG){

  var getContactList=function(){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/Contacts.json`)
        .success(function(response){
          console.log("response", response)
          let contacts =[];
          Object.keys(response).forEach(function(key){
            response[key].id=key;
            contacts.push(response[key]);
          });
          resolve(contacts);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        })
    })
  }

  var postNewContact = function(){
    return $q((resolve, reject)=>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/Contacts.json`,
        JSON.stringify({
          firstName: newContact.firstName,
          lastName: newContact.lastName,
          streetAddress: newContact.streetAddress,
          city: newContact.city,
          state: newContact.state,
          zipcode: newContact.zipcode,
          phone: newContact.phone,
          email: newContact.email,
        })
      )
        .success(function(postResponse){
          resolve(postResponse);
        })
        .error(function(postError){
          reject(postError);
        })
    })
  }


  return {getContactList:getContactList,
          postNewContact:postNewContact}
     
});
