"use strict";

app.run(function(FIREBASE_CONFIG){
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/contacts/list', {
      templateUrl: 'partials/contact-list.html',
      controller: 'contactListCtrl'
    })
    .when('/contacts/new', {
      templateUrl: 'partials/new-contact.html',
      controller: 'NewContactCtrl'
    })
    .when('/contacts/view/:id', {
      templateUrl: 'partials/contact-view.html',
      controller: 'ContactViewCtrl'
    })
    .when('/contacts/edit/:id', {
      templateUrl: 'partials/new-contact.html',
      controller: 'ContactEditCtrl'
    })
    .otherwise('/contacts/list')
})