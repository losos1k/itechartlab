"use strict";

(function () {
    function part(func, ...partialArgs) {
        return function (...insArgs) {
            var args = partialArgs.concat(insArgs);
            return func.apply(null, args);
        }
    }

    function squareSum() {
        return 'squareSum is ' + 
        Array.prototype.slice.call(arguments).reduce(function (sum, curr) {
            return sum += Math.pow(curr, 2);
        }, 0);
    }

    var exp = part(squareSum, 2);
    console.log(exp(3, 5));
})();