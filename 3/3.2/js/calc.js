'use strict';

var mod = (function () {
    const operators = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y
    };

    var calc = function (insExp) {
        let stack = [];

        insExp.split(' ').forEach(function(elem){
            if (elem in operators) {
                let [y, x] = [stack.pop(), stack.pop()];
                stack.push(operators[elem](x, y));
            } else {
                stack.push(parseFloat(elem));
            }
        });

        return stack.pop();
    }

    return {
        calc
    }

})();