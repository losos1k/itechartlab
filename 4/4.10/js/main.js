(function () {
    function lazyEval(fn) {
        return fn.bind.apply(fn, arguments);
    }

    function add(a, b) {
        return a + b;
    }

    var kek = lazyEval(add, 2, 3);

    console.log(kek());
})();