/*
 * Controller for displaing different algorithms' approxymation as tables and charts
 */
 angular.module('jdp').controller('ApproxymationsCtrl',['$scope','ApproxymationService','algorithms',
 function($scope,ApproxymationService,algorithms){
 
    // Defaults
    $scope.max_iterations = $scope.max_iterations  || 20;
    $scope.number = $scope.number || 15;
    $scope.algorithm = $scope.algorithm || "PI.Newton";
    $scope.show_table = $scope.show_table || true;
    $scope.show_chart = $scope.show_chart || false;
    
    // Create array with available numbers of iterations
    $scope.iterations = Array.apply(null,{length:$scope.max_iterations})
                        .map(function(n,index){ 
                            return {
                                label: index,
                                value: index 
                            };
                        });

    
    // List of available algorithms
    $scope.algorithms = algorithms;
    
    $scope.currentAlgorithm = function(){
        return $scope.algorithms.filter(function(item){
            if(item.algorithm === $scope.algorithm){
                return true;
            }
        });
    };
    
    // generate approxymation iterations
    $scope.generate = function(approxymator,number){
        // Generate Chart data series
        var approx = ApproxymationService.getApproxymator(approxymator).calculate(number);
        
        return approx;     
    };
    
    // Get Terms and hard-cut to precision for chart
    $scope.getChartData = function(approx){    
        return [
            ['Polynomial Terms'].concat(approx.getTerms().map(function(t){ 
                return (0+t).toFixed(20); 
            })),
            ['Approxymation'].concat(approx.getTerms().map(function(t,i){
                return 0+approx.getApproxymation(i);
            }))
        ];     
    };
    
 }]);
