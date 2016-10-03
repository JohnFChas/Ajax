/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "repository",
        function ($scope, $location, $route, repository) {
            $scope.$route = $route;
            $scope.api = "http://dummyapi.kodalagom.se/api";
            $scope.posts = {};

            repository.getPosts($scope.api)
                .then(function (data) {
                    $scope.posts = data;
                });

            // TODO: Delete

            $scope.go = function (url) {
                $location.path(url);
            };
        }
    ]);