'use strict';

var mod = (function () {
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

    var formExp, outputExp;

    var inputStrParse = function (insExp) {
        let stack = [];
        let output = [];
        let stackTop = 0;

        insExp.split(' ').forEach(function (elem) {
            if (elem in priorities) {
                stackTop = stack.slice(-1)[0];
                stack.push(elem);                
                
                if (priorities[elem] > priorities[stackTop]) {
                    output.push(stack.pop());
                }
            } else {
                output.push(elem);
            }
        });

        return output.concat(stack);
    }

    // var calc = (function (formExp) {
    //         let stack = [];
    //         console.log(typeof(formExp));
    //         formExp.forEach(function (elem) {
    //             if (elem in operations) {
    //                 var [y, x] = [stack.pop(), stack.pop()];
    //                 stack.push(operations[elem](x, y));
    //             } else {
    //                 stack.push(parseFloat(elem));
    //             }
    //         });

    //         outputExp = stack.pop()

    //         return outputExp;
    //     })();


    return {
        inputStrParse
    }

})();