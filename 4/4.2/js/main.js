"use strict";

(function () {

    function curr(func) {
        var args = [];
        var res;
        var resArr = [];
        return function innerCurr(...args) {
            for (var i = 0; i < args.length; i++) {
                if (args.length > 1) {
                    innerCurr(args[i]);
                }
                var res = func.call(null, args[i]);
            }
            if (args.length <= 1) {
                console.log('arguments of this function: ' + args);
                resArr.push(res);
            }

            return 'the answer is: ' + resArr.reduce(function (sum, curr) {
                return sum += curr;
            });
        };
    };

    function squareSum() {
        return Array.prototype.slice.call(arguments).reduce(function (sum, curr) {
            return sum += Math.pow(curr, 2);
        }, 0);
    }

    function sumsum() {
        return Array.prototype.slice.call(arguments).reduce(function (sum, curr) {
            return sum += curr;
        }, 0);
    }

    console.log(curr(squareSum)(2, 3, 5));
    console.log(curr(sumsum)(1, 2, 3, 4, 1));
})();