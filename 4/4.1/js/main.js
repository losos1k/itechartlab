(function () {
    function part(func, ...partialArgs) {
        return function (...insArgs) {
            var args = partialArgs.concat(insArgs);
            return func.apply(null, args);
        }
    }

    function squareSum() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += Math.pow(arguments[i], 2);
        }
        return 'squareSum is ' + sum;
    }

    var exp1 = part(squareSum, 2);
    console.log(exp1(3, 5));
})();