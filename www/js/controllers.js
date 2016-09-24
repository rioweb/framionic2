
angular.module('starter.controllers', [])
.controller('HomeCtrl',['$scope', function($scope) {


}])
.controller("ExampleController", function($scope, $cordovaSQLite) {
 
    $scope.insert = function(firstname, lastname) {
        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
            console.log("INSERT ID -> " + res.insertId);
        }, function (err) {
            console.error(err);
        });
    }
 
    $scope.select = function(lastname) {
        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
        $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
            if(res.rows.length > 0) {
                console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }
 
})
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MarcasCtrl', function($scope,$ionicFilterBar) {
  


  $scope.playlists = [
    { title: 'AlfaRomeo', type:'car', id: 1},
    { title: 'Audi', type:'car', id: 2},
    { title: 'Chevrolet', type:'car', id: 3},
    { title: 'Fiat', type:'truck',id: 4},
    { title: 'Ford', type:'truck', id: 5},
    { title: 'Volkswagen',type:'truck', id: 6}
  ];

  $scope.filterBarInstance;

  

  $scope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.playlists,
        update: function (filteredItems, filterText) {
          $scope.playlists = filteredItems;
          if (filterText) {
            console.log(filterText);
          }
        }
      });
    };

     $scope.refreshItems = function () {
      if (filterBarInstance) {
        filterBarInstance();
     } 
   };

  
})
.controller('PlaylistCtrl',['$scope', '$stateParams', function($scope, $stateParams) {
    
    $scope.models=[
        {     
     "names":[
         {"modelo":"Alfa z<sd", "codigo":"4"},
         {"modelo":"Alfa asdas", "codigo":"5"},
         {"modelo":"Alfa asdasd ", "codigo":"6"},
     ] },{
     "names":[
         {"modelo":"GT 3.2 JTS V6 - Mot.939A.000-3195cc-191KW/260HP", "codigo":"CA5612","link":"audi1.html"},
         {"modelo":"MiTo 1.4 TB QV - Mot.955A8.000-125KW/170HP", "codigo":"CA9943","link":"audi1.html"},
         {"modelo":"Spider 3.0 V6 - Mot.AR16101-2959cc-141KW/192HP", "codigo":"CA5612","link":"audi1.html"},
     ]
    },
    {
    "names":[
         {"modelo":"A1 1.4T Fsi Sline - Mot.CAVA-1390cc-136KW/185HP", "codigo":"CA9711","link":"audi1.html"},
         {"modelo":"A3 2.0 Fsi - Mot.BVZ-1984cc-110KW/150HP", "codigo":"CA9800", "link":"audi2.html"},
         {"modelo":"Q7 4.2 V8 Fsi - Mot.BNS-4163cc-246KW/335HP", "codigo":"CA10236","link":"audi3.html"},
     ]
    }  
    ];
    
    $scope.number=$stateParams.playlistId;
    
    $scope.modelos=$scope.models[$scope.number];
    console.log($scope.modelos);
    
}]);
