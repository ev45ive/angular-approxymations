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
        
        // initial term
        this.firstTerm = firstTerm;
        
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
            this.terms = [];
            
            if(this.firstTerm){
                this.terms.push(this.firstTerm);
            }
            
            var index = this.terms.length;
            for(; index < numberOfTerms; index++){
                var currentTerm = this.terms[index-1] || undefined;
                var term = this.generator(currentTerm , index, parameter || this.parameter);
                term.index = index;
                
                this.terms.push( term );
            }
            
            return this;
        },
        
        getApproxymation:function(iterations){
            return this.aggregator(iterations);
        }, 
        
        // Sums all the terms to get approxymation
        // TODO: support sum, mean, and custom approx algorithms
        sumAggregator: function(index){
            if(!this.terms){ 
                return undefined;
            }
            
            index = 'undefined' === typeof index? this.terms.length : index;
            
            return this.terms.slice(0,index+1).reduce(function(prev, current, index, terms){            
                return prev + current;
            });
        },
        
        getTerms: function(){
            return this.terms;
        }
    };

})(window.Polynomial || (window.Polynomial = {}));

