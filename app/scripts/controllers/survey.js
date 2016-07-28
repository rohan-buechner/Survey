'use strict';

/**
 * @ngdoc function
 * @name surveyMaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyMaterialApp
 */
angular.module('surveyMaterialApp')
  .controller('SurveyCtrl', function ($scope, $mdDialog, $location) {

      $scope.getTheme = function (rating) {
          switch (rating) {
              case 1:
                  return 'one';
              case 2:
                  return 'two';
              case 3:
                  return 'three';
              case 4:
                  return 'four';
              case 5:
                  return 'five';
          }

          return 'default';
      };

      Array.prototype.sum = function (prop) {
          var total = 0;
          for (var i = 0, _len = this.length; i < _len; i++) {
              total += this[i][prop];
          }
          return total;
      };

      $scope.sliderChange = function (item) {
          if (item.rating < 1) {
              item.answered = 0;
              return false;
          } else {
              item.answered = 1;
          }
          return true;
      };

      $scope.listChange = function (item, weight) {
          item.rating = weight;

          if (item.rating < 1) {
              item.answered = 0;
              return false;
          } else {
              item.answered = 1;
          }
          return true;
      };

      $scope.showAdvanced = function () {

          $location.path('results');

          //$mdDialog.show({
          //    controller: DialogController,
          //    template: '<md-dialog aria-label='Mango (Fruit)'>\
          //                      <md-content>\
          //                          <md-subheader class='md-sticky-no-effect'>Mango (Fruit)</md-subheader>\
          //                          <p>\
          //                          </p>\
          //                      </md-content>\
          //                      <div class='md-actions' layout='row'>\
          //                          <span flex></span>\
          //                          <md-button ng-click=''>\
          //                              Not Useful\
          //                          </md-button>\
          //                          <md-button ng-click='' class='md-primary'>\
          //                              Useful\
          //                          </md-button>\
          //                      </div>\
          //                  </md-dialog>',
          //    targetEvent: ev,
          //})
          //.then(function (answer) {
          //    $scope.alert = 'You said the information was '' + answer + ''.';
          //}, function () {
          //    $scope.alert = 'You cancelled the dialog.';
          //});
      };
      
       function centerFirst(array) {

          //for (var i = 0, _len = 2; i < _len; i++) {
          //    var last = array.pop();
          //    array.unshift(last);
          //}

          return array;
      }
	  
	  // hardcoded for now, to replace with actual API call
      $scope.categories = [
      {
          category: 'First',
          total: {
              max: 25
          },
          statements: [
                  {
                      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                      options: centerFirst([
                          { weight: 1, text: 'Nulla porta feugiat augue, at facilisis est ullamcorper a' },
                          { weight: 2, text: 'Cras blandit placerat sem, quis semper urna commodo a' },
                          { weight: 3, text: 'Nullam maximus quam sit amet turpis ultrices faucibus' },
                          { weight: 4, text: 'Nunc eget mauris sed libero rutrum sagittis. ' },
                          { weight: 5, text: 'Vestibulum malesuada euismod nisl, et elementum ante ullamcorper vel' }
                      ]),
                      rating: 0,
                      answered: 0
                  },
                  {
                      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                      options: centerFirst([
                          { weight: 1, text: 'Nulla porta feugiat augue, at facilisis est ullamcorper a' },
                          { weight: 2, text: 'Cras blandit placerat sem, quis semper urna commodo a' },
                          { weight: 3, text: 'Nullam maximus quam sit amet turpis ultrices faucibus' },
                          { weight: 4, text: 'Nunc eget mauris sed libero rutrum sagittis. ' },
                          { weight: 5, text: 'Vestibulum malesuada euismod nisl, et elementum ante ullamcorper vel' }
                      ]),
                      rating: 0,
                      answered: 0
                  },
                  {
                      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                      options: centerFirst([
                          { weight: 1, text: 'Nulla porta feugiat augue, at facilisis est ullamcorper a' },
                          { weight: 2, text: 'Cras blandit placerat sem, quis semper urna commodo a' },
                          { weight: 3, text: 'Nullam maximus quam sit amet turpis ultrices faucibus' },
                          { weight: 4, text: 'Nunc eget mauris sed libero rutrum sagittis. ' },
                          { weight: 5, text: 'Vestibulum malesuada euismod nisl, et elementum ante ullamcorper vel' }
                      ]),
                      rating: 0,
                      answered: 0
                  }
          ]
      },
          {
              category: 'Second',
              total: {
                  max: 25
              },
              statements: [
                  {
                      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                      options: centerFirst([
                          { weight: 1, text: 'Nulla porta feugiat augue, at facilisis est ullamcorper a' },
                          { weight: 2, text: 'Cras blandit placerat sem, quis semper urna commodo a' },
                          { weight: 3, text: 'Nullam maximus quam sit amet turpis ultrices faucibus' },
                          { weight: 4, text: 'Nunc eget mauris sed libero rutrum sagittis. ' },
                          { weight: 5, text: 'Vestibulum malesuada euismod nisl, et elementum ante ullamcorper vel' }
                      ]),
                      rating: 0,
                      answered: 0
                  },
                  {
                      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                      options: centerFirst([
                          { weight: 1, text: 'Nulla porta feugiat augue, at facilisis est ullamcorper a' },
                          { weight: 2, text: 'Cras blandit placerat sem, quis semper urna commodo a' },
                          { weight: 3, text: 'Nullam maximus quam sit amet turpis ultrices faucibus' },
                          { weight: 4, text: 'Nunc eget mauris sed libero rutrum sagittis. ' },
                          { weight: 5, text: 'Vestibulum malesuada euismod nisl, et elementum ante ullamcorper vel' }
                      ]),
                      rating: 0,
                      answered: 0
                  },
                  {
                      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                      options: centerFirst([
                          { weight: 1, text: 'Nulla porta feugiat augue, at facilisis est ullamcorper a' },
                          { weight: 2, text: 'Cras blandit placerat sem, quis semper urna commodo a' },
                          { weight: 3, text: 'Nullam maximus quam sit amet turpis ultrices faucibus' },
                          { weight: 4, text: 'Nunc eget mauris sed libero rutrum sagittis. ' },
                          { weight: 5, text: 'Vestibulum malesuada euismod nisl, et elementum ante ullamcorper vel' }
                      ]),
                      rating: 0,
                      answered: 0
                  }
              ]
          },
          {
              category: 'Third',
              total: {
                  max: 25
              },
              statements: [
                  {
                      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                      options: centerFirst([
                          { weight: 1, text: 'Nulla porta feugiat augue, at facilisis est ullamcorper a' },
                          { weight: 2, text: 'Cras blandit placerat sem, quis semper urna commodo a' },
                          { weight: 3, text: 'Nullam maximus quam sit amet turpis ultrices faucibus' },
                          { weight: 4, text: 'Nunc eget mauris sed libero rutrum sagittis. ' },
                          { weight: 5, text: 'Vestibulum malesuada euismod nisl, et elementum ante ullamcorper vel' }
                      ]),
                      rating: 0,
                      answered: 0
                  },
                  {
                      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                      options: centerFirst([
                          { weight: 1, text: 'Nulla porta feugiat augue, at facilisis est ullamcorper a' },
                          { weight: 2, text: 'Cras blandit placerat sem, quis semper urna commodo a' },
                          { weight: 3, text: 'Nullam maximus quam sit amet turpis ultrices faucibus' },
                          { weight: 4, text: 'Nunc eget mauris sed libero rutrum sagittis. ' },
                          { weight: 5, text: 'Vestibulum malesuada euismod nisl, et elementum ante ullamcorper vel' }
                      ]),
                      rating: 0,
                      answered: 0
                  },
                  {
                      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                      options: centerFirst([
                          { weight: 1, text: 'Nulla porta feugiat augue, at facilisis est ullamcorper a' },
                          { weight: 2, text: 'Cras blandit placerat sem, quis semper urna commodo a' },
                          { weight: 3, text: 'Nullam maximus quam sit amet turpis ultrices faucibus' },
                          { weight: 4, text: 'Nunc eget mauris sed libero rutrum sagittis. ' },
                          { weight: 5, text: 'Vestibulum malesuada euismod nisl, et elementum ante ullamcorper vel' }
                      ]),
                      rating: 0,
                      answered: 0
                  }
              ]
          },
          {
              category: 'Fourth',
              total: {
                  max: 25
              },
              statements: [
                  {
                      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                      options: centerFirst([
                          { weight: 1, text: 'Nulla porta feugiat augue, at facilisis est ullamcorper a' },
                          { weight: 2, text: 'Cras blandit placerat sem, quis semper urna commodo a' },
                          { weight: 3, text: 'Nullam maximus quam sit amet turpis ultrices faucibus' },
                          { weight: 4, text: 'Nunc eget mauris sed libero rutrum sagittis. ' },
                          { weight: 5, text: 'Vestibulum malesuada euismod nisl, et elementum ante ullamcorper vel' }
                      ]),
                      rating: 0,
                      answered: 0
                  },
                  {
                      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                      options: centerFirst([
                          { weight: 1, text: 'Nulla porta feugiat augue, at facilisis est ullamcorper a' },
                          { weight: 2, text: 'Cras blandit placerat sem, quis semper urna commodo a' },
                          { weight: 3, text: 'Nullam maximus quam sit amet turpis ultrices faucibus' },
                          { weight: 4, text: 'Nunc eget mauris sed libero rutrum sagittis. ' },
                          { weight: 5, text: 'Vestibulum malesuada euismod nisl, et elementum ante ullamcorper vel' }
                      ]),
                      rating: 0,
                      answered: 0
                  },
                  {
                      statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
                      options: centerFirst([
                          { weight: 1, text: 'Nulla porta feugiat augue, at facilisis est ullamcorper a' },
                          { weight: 2, text: 'Cras blandit placerat sem, quis semper urna commodo a' },
                          { weight: 3, text: 'Nullam maximus quam sit amet turpis ultrices faucibus' },
                          { weight: 4, text: 'Nunc eget mauris sed libero rutrum sagittis. ' },
                          { weight: 5, text: 'Vestibulum malesuada euismod nisl, et elementum ante ullamcorper vel' }
                      ]),
                      rating: 0,
                      answered: 0
                  }
              ]
          }
      ];

      $scope.next = function () {
          $scope.paging.selectedIndex = Math.min($scope.paging.maxIndex, $scope.paging.selectedIndex + 1);
      };

      $scope.previous = function () {
          $scope.paging.selectedIndex = Math.max(0, ($scope.paging.selectedIndex - 1));
      };

  });

/*
function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
} */