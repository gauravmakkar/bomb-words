'use strict';

angular.module('bombWords.main', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'main/main.html',
            controller: 'MainCtrl'
        });
    }])

    .controller('MainCtrl', ['$scope', function ($scope) {

        $scope.matrix = [{id: 1, text: "V"}, {id: 2, text: "E"}, {id: 3, text: "U"}, {id: 4, text: "R"}, {
            id: 5,
            text: "E"
        }, {id: 6, text: "E"}, {id: 7, text: "S"}, {id: 8, text: "A"}, {id: 9, text: "T"}]
        $scope.currentWord = []
        $scope.addToTheWord = function (index) {
            $scope.matrix[index].added = true
            $scope.currentWord.push($scope.matrix[index].text)
        }
    }]);