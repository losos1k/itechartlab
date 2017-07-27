(function () {
    function curr(func, ...partialArgs) {
        return function (...insArgs) {
            var args = partialArgs.concat(insArgs);
            if (args.length >= func.length) {
                return func.apply(null, args);
            } else {
                return curr(func, ...partialArgs);
            }
        }
    }

    function squareSum() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += Math.pow(arguments[i], 2);
        }
        return 'squareSum is ' + sum;
    }

    console.log(curr(squareSum, 2, 3, 4)());
})();