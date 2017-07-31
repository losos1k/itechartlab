"use strict";

(function () {
    function lazyEval(func) {
        console.log('the result has not been calculated yet');        
        return func.bind.apply(func, arguments);
    }

    function add(a, b) {
        return 'the result is calculating here: ' + (a + b);
    }

    var calc = lazyEval(add, 2, 3);

    console.log(calc());
})();