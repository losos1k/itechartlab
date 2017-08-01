"use strict";

(function () {
    function unfold(callback, initialValue) {
        var res = [];
        var num = initialValue;
        var state = initialValue;
        while (state) {
            var arr = callback(state);
            num = arr[0];
            state = arr[1];
            res.push(num);
        }
        return res;
    }

    function decrement(number) {
        var newElement = number--;
        var newState = number--;
        newState = newState > 0 ? newState : null;
        return [newElement, newState];
    }

    function minDivider(number) {
        if (number === 1) {
            return [1, null];
        }
        for (var i = 2; i < Math.floor(number / 2); i++) {
            if (number % i === 0) {
                return [i, ~~(number / i)]
            }
        }
        return [number, 1];
    }

    console.log('Decrement: ' + unfold(decrement, 12));
    console.log('Decomposition into simple multipliers: ' + unfold(minDivider, 12));
})();