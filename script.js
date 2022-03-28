var app = angular.module('myApp', []);


app.controller('mainController', function ($scope) {
    $scope.searchBy = '';
    $scope.languages = [
        { name: 'C#', likes: 0, dislikes: 0 },
        { name: 'Java', likes: 0, dislikes: 0 },
        { name: 'JavaScript', likes: 0, dislikes: 0 },
        { name: 'PHP', likes: 0, dislikes: 0 }
    ];
    $scope.limitRows = $scope.languages.length;
    $scope.newLanguage = '';
    $scope.likeLanguage = function (lang) {
        lang.likes++;
    }
    $scope.disLikeLanguage = function (lang) {
        lang.dislikes++;
    }
    $scope.deleteLanguage = function (index) {
        $scope.languages.splice(index, 1);
    }
    $scope.saveLang = function () {
        $scope.languages.push( { name: $scope.newLanguage, likes: 0, dislikes: 0 });
        $scope.limitRows = $scope.languages.length;
    }
});