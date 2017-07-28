(function () {
    function curr(func, ...partialArgs) {
        return function (...insArgs) {
            var args = partialArgs.concat(insArgs);
            console.log('k');
            console.log(partialArgs);

            while (arguments >= 1) {
                console.log('a');
                return curr(func, ...partialArgs);
            }
            console.log('b');
            console.log(partialArgs);
            
            return func.apply(null, args);
        }
    }

    function squareSum() {
        return 'squareSum is ' +
            Array.prototype.slice.call(arguments).reduce(function (sum, curr) {
                return sum += Math.pow(curr, 2);
            }, 0);
    }

    console.log(curr(squareSum, 2, 3, 4)());
})();