(function () {
    var arr = ['v1', 'v', 'val1', 'vvv3', 'val57439', '123'];

    var getFirst = function (array, cb) {
        outputArr = [];
        for (var i = 0; i < array.length; i++) {
            if (cb.call(null, array[i], i, array))
                outputArr.push(array[i]);
        }
        return outputArr[0];
    };

    var res = getFirst(arr, function (curr) {
        return curr.length > 2;
    });

    console.log('Array is: ' + arr);
    console.log('The first element that satisfies given condition: ' + res);
})();