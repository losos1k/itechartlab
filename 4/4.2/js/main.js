(function () {

    function curr(func) {
        var args = [];
        return function innerCurr() {
            for (var i = 0; i < arguments.length; i++) {
                args[i] = arguments[i];
            }
            return args[i] >= func.length ? func.apply(null, args) : innerCurr();
        };
    }

    function squareSum() {
        return 'squareSum is ' +
            Array.prototype.slice.call(arguments).reduce(function (sum, curr) {
                return sum += Math.pow(curr, 2);
            }, 0);
    }

    console.log(curr(squareSum)(2, 3, 5));
})();