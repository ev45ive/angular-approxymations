describe('Approxymation Service',function(){
'use strict';

    beforeEach(module('jdp'));
    
    var approxService;
    beforeEach(inject(['ApproxymationService',function(ApproxymationService){
        approxService = ApproxymationService;
    }]));
    
    it('should create approxymators with given options',function(){
        approxService.createApproxymator('test-approxymator-1',
            function(currentTerm, index, parameter){
                return currentTerm.multiply(index+1);
            }, new Polynomial.Term(1));
        
        expect(approxService.getApproxymator('test-approxymator-1')
                            .calculate(2)
                            .getApproxymation()).toEqual( 1 + 2*1 );
    });
    
    it('should store different approxymators',function(){
        var factorials_approx = new Polynomial.IterativeApproxymator("test-approxymator-2", 
            function(currentTerm, index, parameter){
                return currentTerm.multiply(index);
            }, new Polynomial.Term(1), 1);
    
        approxService.addApproxymator("test-approxymator-2",factorials_approx);
        expect(approxService.getApproxymators()).toEqual({'test-approxymator-2':factorials_approx});
        expect(approxService.getApproxymator('test-approxymator-2')).toBe(factorials_approx);
        
    });
    
    it('should allow calculating selected aproxymators',function(){
        approxService.createApproxymator('test-approxymator-3',
            function(currentTerm, index, parameter){
                return currentTerm.multiply(index+1);
            }, new Polynomial.Term(1), 1);
        
        expect(approxService.getApproxymator('test-approxymator-3')
                            .calculate(3)
                            .getApproxymation()).toEqual( 1 + 2*1 + 3*2 );
        
    });

});
