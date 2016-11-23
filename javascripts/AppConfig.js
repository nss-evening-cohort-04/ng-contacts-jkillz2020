"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject)=> {
  if(AuthFactory.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
})

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
  firebase.initializeApp(FIREBASE_CONFIG);

  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){

    let logged = AuthFactory.isAuthenticated();
    let appAd;

    if(currRoute.originalPath){
      appAd = currRoute.originalPath.indexOf('/auth') !== -1;
    }

    if(!appAd && !logged){
      event.preventDefault();
      $location.path("/auth");
    }
  })
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/auth', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl'
    })
    .when('/contacts/list', {
      templateUrl: 'partials/contact-list.html',
      controller: 'ContactListCtrl',
      resolve: {isAuth}
    })
    .when('/contacts/new', {
      templateUrl: 'partials/new-contact.html',
      controller: 'NewContactCtrl',
      resolve: {isAuth}
    })
    .when('/contacts/view/:id', {
      templateUrl: 'partials/contact-view.html',
      controller: 'ContactViewCtrl',
      resolve: {isAuth}
    })
    .when('/contacts/edit/:id', {
      templateUrl: 'partials/new-contact.html',
      controller: 'ContactEditCtrl',
      resolve: {isAuth}
    })
    .when('/logout', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl',
      resolve: {isAuth}
    })
    .otherwise('/auth')
})