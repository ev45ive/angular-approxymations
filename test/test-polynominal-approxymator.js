describe('Polynomial Module',function(){
'use strict';

    /*
     * Polynomial Term value-object used to perform operations on fractions
     */
    describe('"Term" value-object implementation',function(){
    
        var Polynomial = window.Polynomial, term_half,term_two;

        beforeEach(function(){
	        term_half = new Polynomial.Term(1,2);
	        term_two = new Polynomial.Term(2,1);
        });
	    
	    it('should create Term objects with numerator and optional denominator as arguments',function(){ 
	        expect(new Polynomial.Term(2.5).getValue()).toEqual(2.5);
	        expect(term_half.getValue()).toEqual(0.5);
	        expect(term_two.getValue()).toEqual(2.0);
	    });
	    
	    it('should be immutable, and return clones on operations',function(){ 
	        var term_clone = term_half.clone();
	        
	        expect(term_half).not.toBe(term_clone);
	        expect(term_half.getValue()).toEqual(term_clone.getValue());
	    });
	    
	    it('should multiply Term by another Term',function(){	        
	        expect(term_half.multiply(term_two).getValue()).toEqual(1);	        
	    });
	    
	    it('should divide Term by another Term',function(){ 	        
	        expect(term_half.divide(term_two).getValue()).toEqual(0.25);	        
	    });
	    
	    it('should multiply Term by scalar value',function(){ 	        
	        expect(term_half.multiply(2).getValue()).toEqual(1);	        
	    });
	    
	    it('should divide Term by scalar value',function(){ 	        
	        expect(term_half.divide(2).getValue()).toEqual(0.25);	        
	    });
	    
	    it('should be coercible to Number',function(){ 	        
	        expect(term_half.getValue()).toEqual(0.5);	        
	    });
	});
	
	/*
	 * Polynomial approxymation module using iterative method
	 */
	describe('Iterative Approxymation Module',function(){
	
	    var Polynomial = window.Polynomial, factorials_approx;
	    beforeEach(function(){
	        // sample easily predictable approxymator that sums factorials
	        factorials_approx = new Polynomial.IterativeApproxymator("test-approxymator", 
	            function(currentTerm, index, parameter){
                    return currentTerm.multiply(index+1); 
                }, new Polynomial.Term(1,1), 1);
	        });
	
	    it('should create approxymator objects taking name, term function, optional first term and optional parameter ',function(){
            expect(factorials_approx.getName()).toBe("test-approxymator");
            
            // Test sample factorial 5!
            expect(factorials_approx.calculate(5).getApproxymation()).toEqual(  
                1 +
                1*2 +
                1*2*3 +
                1*2*3*4 +
                1*2*3*4*5
            );
	    });
	
        it('should generate given number of Polynomial terms and return their values as an array',function(){
            // Test sample factorial 5!
            expect(factorials_approx.calculate(5).getTerms().map(function(t){
                return t.getValue();
            })).toEqual([
                1,
                1*2,
                1*2*3,
                1*2*3*4,
                1*2*3*4*5
            ]);
	    });
        
        xit('should cache generated terms',function(){
	        // TODO: test memoization, use jasmine Spy
	    });    
        
        it('should calculate final approxymation as a sum of terms and return a number value',function(){
	        expect(factorials_approx.calculate(5).getApproxymation()).toEqual(  1 +
                                                                                1*2 +
                                                                                1*2*3 +
                                                                                1*2*3*4 +
                                                                                1*2*3*4*5);
	    });
	});


});
