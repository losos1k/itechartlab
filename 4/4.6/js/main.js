(function () {
    var arr = [12, 5, undefined, 'aoa', 65, 1024, 'kek', 8];

    var res = arr.filter(function (curr) {
        return typeof (curr) === 'number';
    });

    console.log(arr);
    console.log('Native filter result: ' + res);


    var myFilter = function (array, cb) {
        outputArr = [];
        for (var i = 0; i < array.length; i++) {
            if (cb.call(null, array[i], i, array))
                outputArr.push(array[i]);
        }
        return outputArr;
    };

    var resMyFilter = myFilter(arr, function (curr) {
        return typeof (curr) === 'number';
    });

    console.log('My filter result: ' + resMyFilter);
})();