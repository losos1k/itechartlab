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
        return 'squareSum is ' +
            Array.prototype.slice.call(arguments).reduce(function (sum, curr) {
                return sum += Math.pow(curr, 2);
            }, 0);
    }

    console.log(curr(squareSum, 2)(3));
})();