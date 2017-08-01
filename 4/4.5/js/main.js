"use strict";

(function () {
    var arr = ['kek', 'lol', 'azaza'];

    var res = arr.map(function (curr) {
        return curr.length;
    });

    console.log(arr);
    console.log('Native map result: ' + res);


    var myMap = function (array, cb) {
        var outputArr = [];
        for (var i = 0; i < array.length; i++) {
            outputArr.push(cb(array[i], i, array));
        }
        return outputArr;
    };

    var resMyMap = myMap(arr, function (curr) {
        return curr.length;
    });

    console.log('My reduce result: ' + resMyMap);
})();