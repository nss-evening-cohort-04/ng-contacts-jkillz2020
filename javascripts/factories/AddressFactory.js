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

  var postNewContact = function(newContact){
    return $q((resolve, reject)=>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/Contacts.json`,
        JSON.stringify({
          city: newContact.city,
          email: newContact.email,
          firstName: newContact.firstName,
          lastName: newContact.lastName,
          phone: newContact.phone,
          state: newContact.state,
          streetAddress: newContact.streetAddress,
          zipcode: newContact.zipcode,
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

  var deleteContact =  function(contactId){
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/Contacts/${contactId}.json`)
      .success(function(deleteResponse){
        console.log("success")
        resolve(deleteResponse);
      })
      .error(function(deleteError){
        reject(deleteError);
      })
    })
  }

  var getSingleContact =  function(contactId){
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/Contacts/${contactId}.json`)
      .success(function(getSingleResponse){
        console.log("success", getSingleResponse)
        resolve(getSingleResponse);
      })
      .error(function(getSingleError){
        reject(getSingleError);
      })
    })
  }


var editContact = function(editContact){
    return $q((resolve, reject)=>{
      $http.put(`${FIREBASE_CONFIG.databaseURL}/Contacts/${editContact.id}.json`, 
        JSON.stringify({
        assignedTo: editItem.assignedTo,
        isCompleted: editItem.isCompleted,
        task: editItem.task
      })
    )
      .success(function(editResponse){
        resolve(editResponse);
      })
      .error(function(editError){
        reject(editError);
      })
    })
  }


  return {getContactList:getContactList,
          postNewContact:postNewContact,
          deleteContact:deleteContact,
          getSingleContact:getSingleContact,
          editContact:editContact
        }
     
});
