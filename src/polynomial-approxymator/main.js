/*
 * Iterative polynomial approxymators
 */
(function(Polynomial){
"use strict";


    Polynomial.Term = function(numerator,denominator){
        if('undefined' === typeof denominator){
            denominator = 1;
        }
        
        this.getNumerator = function(){
            return numerator;
        };
        
        this.getDenominator = function(){
            return denominator;
        };
        
        // make chainable
        return this;        
    };
    
    Polynomial.Term.prototype = {
    
        getValue: function(){
            return parseFloat(this.getNumerator() / this.getDenominator());
        },
        
        clone: function(){
            return new Polynomial.Term(this.getNumerator(), this.getDenominator());
        },
        
        multiply: function(value){
            return new Polynomial.Term( this.getNumerator() * value, this.getDenominator() ); 
        },
        
        divide: function(value){
            return new Polynomial.Term( this.getNumerator(), this.getDenominator() * value ); 
        }
    
    };
    
    // make auto-coercible to Number
    Polynomial.Term.prototype.valueOf = Polynomial.Term.prototype.getValue;
    
    /*
     *  Iterative Approxymator of Polynomials
     *  - given number of terms generates serie of polynomial terms with given 'currentTerm' callback
     *  - calculates sum of those terms to get polynomial approxymation of a math constant. 
     */
    Polynomial.IterativeApproxymator = function(name, termGenerator, firstTerm, parameter){
        this.name = name;
        this.generator = termGenerator;
        this.firstTerm = firstTerm;
        this.parameter = parameter;
    };
    Polynomial.IterativeApproxymator.prototype = {
        getName: function(){
            return this.name;
        },
        
        calculate: function(numberOfTerms){
            this.terms = [this.firstTerm];
            
            for(var index = 1; index < numberOfTerms; index++){
                this.terms.push( this.generator( this.terms[index-1], index, this.parameter) );
            }
            
            return this;
        },
        
        // Sums all the terms to get approxymation
        // TODO: support sum, mean, and custom approx algorithms
        getApproxymation: function(){
            return this.terms.reduce(function(prev, current, index, terms){            
                return prev + current;
            });
        },
        
        getTerms: function(){
            return this.terms;
        }
    };

})(window.Polynomial || (window.Polynomial = {}));

