(function () {
    var arr = ['kek', 'lol', 'azaza'];

    var res = arr.reduce(function (sum, curr) {
        return sum += curr.length;
    }, 0)

    console.log(arr);
    console.log('Native reduce result: ' + res);


    var myReduce = function (array, cb, initialVal) {
        var val = initialVal;
        for (var i = 0; i < array.length; i++) {
            val = cb.call(null, val, array[i], i, array);
        }
        return val;
    };

    var resMyReduce = myReduce(arr, function (sum, curr) {
        return sum += curr.length;
    }, 0);

    console.log('My reduce result: ' + resMyReduce);
})();