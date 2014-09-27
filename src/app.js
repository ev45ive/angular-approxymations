/*
 *  JDP JS test angular app configuration
 */

// Create new App, load jsp-test module and configure it.
var jdpApp = angular.module('jdpapp',['jdp','ngRoute']);

jdpApp.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){

    $routeProvider.when('/',{
        templateUrl:'/views/approxymations.html',
        controller: 'ApproxymationsCtrl'
    }).otherwise({
        templateUrl:'/views/404.html'
    });

}]);

jdpApp.value('algorithms',[
    { label: "Newton's PI", constant:"PI", algorithm: "PI.Newton"},
    { label: "Chudnovsky's PI", constant:"PI", algorithm: "PI.Chudnovsky"},
    { label: "Madhava's PI", constant:"PI", algorithm: "PI.Madhava"},
    { label: "Maclaurin's Exponential", constant:"Exponential", algorithm: "Exponential.Maclaurin"},
]);

jdpApp.config(['ApproxymationServiceProvider',function(PolyApproxProvider){

    /*
     * Newton's PI
     */
    PolyApproxProvider.createApproxymator("PI.Newton",function(currentTerm,index,parameter){
        // zero-based index
        var k = index-1;
        
        // newtons approxymation of PI
        return new Polynomial.Term( ( Math.pow(2, k) * Math.pow(Math.factorial(k), 2) *2),
                                    ( Math.factorial(2 * k + 1) ));
    },new Polynomial.Term(0),0);
    
    
    /*
     * Chudnovsky's PI
     */
    PolyApproxProvider.createApproxymator("PI.Chudnovsky",function(currentTerm,index,parameter){
            // zero-based index
            var k = index-1;
            
            // newtons approxymation of PI
            return new Polynomial.Term( 12*(Math.pow(-1, k) * Math.factorial(6 * k) * (163 * 3344418 * k + 13591409)),
                                        (Math.factorial(3 * k) * Math.pow(Math.factorial(k), 3) * Math.pow(640320, (3 * k + 3 / 2))));
        },
        new Polynomial.Term(0),0,
        // special aggreagator
        function(){ return 1/this.sumAggregator(); }
    );
    
    /* 
     * Madhava's PI
     */
    PolyApproxProvider.createApproxymator("PI.Madhava",function(currentTerm,index,parameter){
        // zero-based index
        var k = index-1;
        
        // newtons approxymation of PI
        return Math.sqrt(12) * (Math.pow(-3, k * -1)) / (2 * k + 1);
    },new Polynomial.Term(0));

    /*
     * Maclaurin's Exponential
     */
    PolyApproxProvider.createApproxymator("Exponential.Maclaurin",function(currentTerm,index,parameter){
        // zero-based index
        var k = index-1;
        
        // newtons approxymation of PI
        return currentTerm.multiply(parameter).divide(index);
    },new Polynomial.Term(1),1);

}]);

jdpApp.value('approxymators',[]);

