'use strict';

/**
 * @ngdoc function
 * @name surveyMaterialApp.directive:ul-wheel
 * @description
 * # unordered list wheel
 */
angular.module('surveyMaterialApp')
    .directive('ulWheel', function () {
        return {
            restrict: 'EA',
            replace: 'true',
            transclude: 'true',
            scope: {
                selected: '='
            },
            template:
                '<div><ul class="clist" ng-transclude></ul></div>',
            link: function (scope, element) {

                var elems, elem;

                scope.up = function () {
                    elems = element.find('li');
                    elem = angular.element(elems[0]).remove();
                    elems.parent().append(elem.clone());
                };

                scope.down = function () {
                    elems = element.find('li');
                    elem = angular.element(elems[elems.length - 1]).remove();
                    elems.parent().prepend(elem.clone());
                };

                scope.$watch('selected', function (oldValue, newValue) {

                    var diff = oldValue - newValue;

                    if (diff < 0) {
                        diff = diff * -1;
                    }

                    for (var i = 0; i < diff; i++) {
                        if (oldValue < newValue) {
                            scope.down(diff);
                        } else {
                            scope.up(diff);
                        }
                    }
                });
            }
        };
    });