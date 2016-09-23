// Ionic Starter App
var db = null;
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','jett.ionic.filter.bar','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicFilterBarConfigProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.audi', {
    url: '/audi',
    views: {
      'menuContent': {
        templateUrl: 'templates/audi.html'
      }
    }
  })
  .state('app.audi2', {
    url: '/audi2',
    views: {
      'menuContent': {
        templateUrl: 'templates/audi2.html'
      }
    }
  }).state('app.audi3', {
    url: '/audi3',
    views: {
      'menuContent': {
        templateUrl: 'templates/audi3.html'
      }
    }
  }).state('app.alfa1', {
    url: '/alfa1',
    views: {
      'menuContent': {
        templateUrl: 'templates/alfa1.html'
      }
    }
  }).state('app.alfa2', {
    url: '/alfa2',
    views: {
      'menuContent': {
        templateUrl: 'templates/alfa2.html'
      }
    }
  }).state('app.alfa3', {
    url: '/alfa3',
    views: {
      'menuContent': {
        templateUrl: 'templates/alfa3.html'
      }
    }
  })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/marcas',
      views: {
        'menuContent': {
          templateUrl: 'templates/marcas.html',
          controller: 'MarcasCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/marcas/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/marcas');
});
