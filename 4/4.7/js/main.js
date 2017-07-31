"use strict";

(function () {
    var arr = [1, 2, 3, 5, 0, 4, 0, 15, 12];

    var myReduce = function (array, cb, initialVal = 0) {
        var val = initialVal;
        for (var i = 0; i < array.length; i++) {
            val = cb.call(null, val, array[i], i, array);
        }
        return val;
    };

    var myFilter = function (array, cb) {
        outputArr = [];
        for (var i = 0; i < array.length; i++) {
            if (cb.call(null, array[i], i, array))
                outputArr.push(array[i]);
        }
        return outputArr;
    };

    var even = myFilter(arr, function (curr) {
        return curr % 2 === 0;
    });

    var arrSum = myReduce(even, function (sum, curr) {
        return sum += curr;
    });
    
    var avg = arrSum / even.length;

    console.log('Array is: '+ arr);
    console.log('Array of even numbers is '+ even);
    console.log('The average on even numbers is: ' + avg);
})();