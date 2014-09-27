/*
 * Controller for displaing different algorithms' approxymation as tables and charts
 */
 angular.module('jdp').controller('ApproxymationsCtrl',['$scope','ApproxymationService','algorithms',
 function($scope,ApproxymationService,algorithms){
 
    // Defaults
    $scope.max_iterations = $scope.max_iterations  || 20;
    $scope.number = $scope.number || 15;
    $scope.algorithm = $scope.algorithm || "PI.Newton";
    $scope.chart = $scope.chart || false;
    $scope.table = $scope.table || true;
    
    // Create array with available numbers of iterations
    $scope.iterations = Array.apply(null, {length: $scope.max_iterations }).map(Number.call, Number);
    
    // List of available algorithms
    $scope.algorithms = algorithms;
    
    // generate approxymation iterations
    $scope.generate = function(approxymator,number){
        return ApproxymationService.getApproxymator(approxymator).calculate(number);      
    };
 }]);
