describe('Approxymation Service',function(){
'use strict';

    beforeEach(module('jdp'));
    
    var approxService;
    beforeEach(inject(['ApproxymationService',function(ApproxymationService){
        approxService = ApproxymationService;
    }]));
    
    it('should create approxymators with given options',function(){
        approxService.create('test-approxymator-1',
            function(currentTerm, index, parameter){
                return currentTerm.multiply(index+1);
            }, 1);
        
        expect(approxService.getApproxymator('test-approxymator-1')
                            .calculate(2)
                            .getApproxymation()).toEqual( 1*1 + 1*2 );
    });
    
    it('should store different approxymators',function(){
        var factorials_approx = new Polynomial.IterativeApproxymator("test-approxymator-2", 
            function(currentTerm, index, parameter){
                return currentTerm.multiply(index+1);
            }, new Polynomial.Term(1,1), 1);
    
        approxService.addApproxymator(factorials_approx);
        expect(approxService.getApproxymators()).toBe([factorials_approx]);
        expect(approxService.get('test-approxymator-2')).toBe(factorials_approx);
        
    });
    
    it('should allow running selected aproxymators multiple times',function(){
        approxService.create('test-approxymator-3',
            function(currentTerm, index, parameter){
                return currentTerm.multiply(index+1);
            }, 1);
        
        expect(approxService.getApproxymator('test-approxymator-3')
                            .calculate(3)
                            .getApproxymation()).toEqual( 1*1 + 1*2 + 1*3 );
        
    });

});
