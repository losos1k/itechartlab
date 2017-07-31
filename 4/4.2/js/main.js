"use strict";

(function () {

    function curr(func) {
        var args = [];
        var res;
        return function innerCurr(...args) {
            for (var i = 0; i < args.length; i++) {
                if (args.length > 1) {
                    innerCurr(args[i]);
                }
                var res = func.call(null, args[i]);
            }
            console.log(arguments);
            console.log(res);

            return res;
        };
    };

    function squareSum() {
        var resArr = [];
        var kek = Array.prototype.slice.call(arguments).reduce(function (sum, curr) {
            return sum += Math.pow(curr, 2);
        }, 0);
        // resArr.push(kek);
        return kek;
    }

    console.log(curr(squareSum)(2, 3, 5));
})();