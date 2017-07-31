"use strict";

(function () {
    function fillArray(size = 0) {
        let arr = [];
        for (var i = 0; i < size; i++){
            arr.push(Math.floor(Math.random() * 100));
        }
        return arr;
    };

    var arr = fillArray(10);

    var myReduce = function (array, cb, initialVal = 0) {
        var val = initialVal;
        for (var i = 0; i < array.length; i++) {
            val = cb.call(null, val, array[i], i, array);
        }
        return val;
    };

    var sum = myReduce(arr, function (sum, curr){
        return sum += curr;
    });

    console.log('Array is: ' + arr);
    console.log('Array elements sum is: '+  sum);
})();