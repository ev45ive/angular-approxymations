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
    Polynomial.IterativeApproxymator = function(name, termGenerator, firstTerm, parameter,aggregator){
        this.name = name;
        // function generating next polynomial term
        this.generator = termGenerator;
        
        // initial term - defaults to zero, neutral under sum.
        this.firstTerm = firstTerm || new Polynomial.Term(0);
        
        // default parameter that can be overriden in calculate method
        this.parameter = parameter;
        
        // final aggreagator or terms, defaults to simple sum aggregation
        this.aggregator = aggregator || this.sumAggregator;
    };
    Polynomial.IterativeApproxymator.prototype = {
        getName: function(){
            return this.name;
        },
        
        calculate: function(numberOfTerms,parameter){
            this.terms = [this.firstTerm];
            
            for(var index = 1; index < numberOfTerms; index++){
                this.terms.push( this.generator( this.terms[index-1], index, parameter || this.parameter) );
            }
            
            return this;
        },
        
        getApproxymation:function(){
            return this.aggregator();
        }, 
        
        // Sums all the terms to get approxymation
        // TODO: support sum, mean, and custom approx algorithms
        sumAggregator: function(){
            return this.terms.reduce(function(prev, current, index, terms){            
                return prev + current;
            });
        },
        
        getTerms: function(){
            return this.terms;
        }
    };

})(window.Polynomial || (window.Polynomial = {}));

