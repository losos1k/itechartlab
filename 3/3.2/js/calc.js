'use strict';

var Calculator = function (insExp) {
    const operations = {
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

    this.inputStrParse = function (insExp) {
        let stack = [];
        let output = [];

        insExp.match(/[0-9]*[.]?[0-9]+|[+|*|/|-]/g).forEach(function (elem) {
            if (elem in priorities) {
                var stackTop = stack.slice(-1)[0];

                if (priorities[elem] <= priorities[stackTop]) {
                    while ((stack.length > 0) && (priorities[elem] <= priorities[stackTop])) {
                        output.push(stack.pop());
                    }
                }
                stack.push(elem);

            } else {
                output.push(elem);
            }
        });

        formExp = output.concat(stack.reverse());

        return calc(formExp);
    }

    var calc = function (formExp) {
        let stack = [];
        formExp.forEach(function (elem) {
            if (elem in operations) {
                var [y, x] = [stack.pop(), stack.pop()];
                stack.push(operations[elem](x, y));
            } else {
                stack.push(parseFloat(elem));
            }
        });

        return stack.pop();
    };
};