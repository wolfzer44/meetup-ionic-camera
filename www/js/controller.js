// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

(function() {
  'use strict'
  angular
    .module('starter')
    .controller('cameraCtrl', ctrl);

    ctrl.$inject = ['$scope', '$log', '$cordovaCamera']

    function ctrl($scope, $log, $cordovaCamera) {

      $scope.takePicture = function() {
        var options = {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: false,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: true,
  	      correctOrientation:true
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
          $scope.image = "data:image/jpeg;base64," + imageData;
          $log.debug(imageData);
        }, function(err) {
          // error
        });
      }


    }

}())
