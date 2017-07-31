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

    function factorial(num) {
        return (num != 1) ? num * factorial(num - 1) : 1;
    }


    var lazyMemoSum = lazyEvalMemo(factorial, 3);

    console.log(lazyMemoSum());
    console.log(lazyMemoSum());
})();