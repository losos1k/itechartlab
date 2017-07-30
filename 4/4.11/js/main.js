(function () {
    function lazyEvalMemo(fn) {
        var args = arguments;
        var res;
        var lazyEval = fn.bind.apply(fn, args);
        return function () {
            if (res) {
                return 'the result was already calculated: ' + res;
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