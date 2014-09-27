/*
 *
 */
 angular.module('jdp').controller('ApproxymationsCtrl',['$scope','ApproxymationService',
 function($scope,ApproxymationService){
 
    // Create array with available numbers of iterations
    $scope.iterations = Array.apply(null, {length: 20}).map(Number.call, Number);
    
    $scope.approxymators = [
        { label: 'Newtons PI', approxymator: ApproxymationService.getApproxymator('Newton PI')},
        { label: "Chudnovsky's PI", approxymator: ApproxymationService.getApproxymator("Chudnovsky's PI")},
        { label: "Madhava's PI", approxymator: ApproxymationService.getApproxymator("Madhava's PI")},
        { label: "Maclaurin's Exponential", approxymator: ApproxymationService.getApproxymator("Maclaurin's Exponential")},
    ];
    console.log(ApproxymationService.getApproxymators());
    console.log($scope.approxymators[3].approxymator.calculate(5).getTerms().map(Number));
    console.log($scope.approxymators[3].approxymator.calculate(15).getApproxymation());
    $scope.chart = false;
    $scope.table = false;
 
 }]);
