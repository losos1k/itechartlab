"use strict";

(function () {
    function lazyEvalMemo(func) {
        var res;
        var lazyEval = func.bind.apply(func, arguments);
        return function () {
            if (res) {
                return 'the result has been already calculated: ' + res;
            }
            res = lazyEval();
            return 'calculated result is: ' + res;
        }
    }

    function square(num) {
        return Math.pow(num, 2);
    }


    var lazyMemoSum = lazyEvalMemo(square, 3);

    console.log(lazyMemoSum());
    console.log(lazyMemoSum());
})();