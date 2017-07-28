(function () {
    function fillArray(size = 0) {
        if (size <= 0) return [];
        return [Math.floor(Math.random() * 100)].concat(fillArray(size - 1));
    }
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