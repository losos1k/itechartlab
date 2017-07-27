(function () {
    function part(func, ...partialArgs) {
        return function (...insArgs) {
            var args = partialArgs.concat(insArgs);
            return func.apply(null, args);
        }
    }

    function squareSum() {
        var args = Array.prototype.slice.call(arguments);
        var sum1 = args.reduce(function (sum, curr) {
            return sum += curr;
        }, 0);
        return 'squareSum is ' + sum1;
    }

    var exp1 = part(squareSum, 2);
    console.log(exp1(3, 5));
})();