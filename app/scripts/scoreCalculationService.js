'use strict';

angular.module('surveyMaterialApp')
    .service('scoreCalculationService', function () {
    var score = [];

    var saveScore = function(newObj) {
        score.push(newObj);
    };

    var getScore = function () {
        return score;
    };

    var getFinalScore = function () {

        // ((categories[index].statements.sum('rating') / categories[index].statements.length * 5 * 100) / categories[index].total.max)
        // (categories[index].statements.sum('rating') / categories[index].statements.length * 5)
        return score;
    };

    return {
        saveScore: saveScore,
        getScore: getScore,
        getFinalScore: getFinalScore
    };

});