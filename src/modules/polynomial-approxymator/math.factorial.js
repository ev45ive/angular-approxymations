/*
 * Math.Factorial
 */
(function(exports){
    var f = [1, 1];
    var i = 2;
    exports.factorial = function factorial(n)
    {
        if (typeof f[n] !== 'undefined'){
            return f[n];
        }
        var result = f[i-1];
        for (; i <= n; i++){
            f[i] = result = result * (i.toString());
        }
        return result;
    };
})(Math);
