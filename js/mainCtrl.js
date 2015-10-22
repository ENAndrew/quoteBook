var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
    
    $scope.quotes = dataService.getData();
    
    $scope.newQuote = {
        text: "",
        author: ""
    };
    
    $scope.saveQuote = function() {
        console.log($scope.newQuote);
        dataService.addData($scope.newQuote);
    };
    
    $scope.deleteQuote = function() {
        console.log($scope.textBit);
        dataService.removeData($scope.textBit);
    };
    
    $scope.sortByAuthor = function() {
        $scope.searchParam = $scope.sortAuthor;
    };
    
});


