angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, $http) {
  // console.log("Hello, Dash!");
})

.controller('TestCtrl', function($scope, $ionicLoading, $http){
  var baseUrl = 'http://api.staging.cloutship.com/v1';

  $scope.show = function(added) {
    $ionicLoading.show({
      template: "<h1>"+added+"</h1>",
      duration: 1000
    });
  }

  $scope.getBoxes = function () {
    $http.get(baseUrl + '/boxes')
        .then(function(response) {
            $scope.show(response.data.boxes[0].id);
            console.log(response.data.boxes[0].id);
    });
    // return deferred.promise;
  }

  $scope.getTrash = function(){
      $http.get(baseUrl+ '/boxes')
        .then(function (response) {

            $scope.show("bad");
        })
  }


  $scope.hide = function(){
    $ionicLoading.hide();
  };
})




.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('PopUpCtrl', function($scope, $ionicPopup, $timeout){

  $scope.action = function() {

 };

  $scope.showConfirm = function(){
    var confirmPopUp = $ionicPopup.confirm({
      title: "testing pop up thing",
      template: "<h1>can I put tags in this?</h1>"
    });
    confirmPopUp.then(function(res){
        if(res){
          alert("screaming");
        }
        else{
          alert("<p><b>everything will be fire</b></p>");
        }
    });
  };

  $scope.showPopUp = function(){

    $scope.data = {};

    var confirmShow = $ionicPopup.show({
      template: '<input type="password" ng-model="data.wifi">',
      title: 'testing input stuff',
      subTitle: 'help',
      scope: $scope,
      buttons: [
        {text: "cancel"},
        {
          text: "killing mode",
          type: "button-assertive",
          onTap: function(e){
            if(!$scope.data.wifi){
              // alert("wake me up inside");
            }
            else {
              // alert($scope.data.wifi);
              e.preventDefault();
            }
          }
        }
        ]

    });
    // alert("make it stop");

  };

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
