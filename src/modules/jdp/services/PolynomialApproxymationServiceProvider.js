/*
 *  Approxymation Service Provider
 */
 angular.module('jdp').provider('ApproxymationService',
 function ApproxymationServiceProvider(){
 
    var approxymators = {};
    var ApproxymationService = {
        createApproxymator: function(name,termGenerator,firstTerm,parameter,aggregator){
            this.addApproxymator(name, 
                new Polynomial.IterativeApproxymator(name,
                    termGenerator,
                    firstTerm,
                    parameter,
                    aggregator)
            );
        },
        
        addApproxymator: function(name,approxymator){
            approxymators[name] = approxymator;
        },
        
        getApproxymators: function(){
            return approxymators;
        },
        
        getApproxymator: function(name){
            return approxymators[name];
        }
    };
    
    // Expose service configuration API
    this.createApproxymator = ApproxymationService.createApproxymator;
    this.addApproxymator = ApproxymationService.addApproxymator;
  
    // Return Service Singleton
    this.$get = function(){
        return ApproxymationService;
    };
 
 });

