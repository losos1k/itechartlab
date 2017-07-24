'use strict';

var mod = (function () {
    const elemerators = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y
    };

    const priorities = {
        '*': 2,
        '/': 2,
        '+': 1,
        '-': 1
    };

    var formExp;

    var inputStrParse = function (insExp) {
        var stack = [];
        var output = [];

        insExp.split(' ').forEach(function (elem) {
            if (elem in priorities) {
                stack.push(elem);
                var stackTop = stack.slice(-1)[0];
                
                if (priorities[elem] > priorities[stackTop]) {
                    output.push(stack.pop());
                }
            } else {
                output.push(elem);
            }
        });
        formExp = output.concat(stack);

        return formExp;
    }

    var calc = function (formExp) {
        var stack = [];

        insExp.split(' ').forEach(function (elem) {
            if (elem in elemerators) {
                var [y, x] = [stack.pop(), stack.pop()];
                stack.push(elemerators[elem](x, y));
            } else {
                stack.push(parseFloat(elem));
            }
        });

        return stack.pop();
    }

    return {
        inputStrParse,
        calc
    }

})();