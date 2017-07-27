(function () {
    var arr = [12, 5, undefined, 'aoa', 65, 1024, 'kek', 8];

    var res = arr.filter(function (curr) {
        return typeof(curr) === 'number';
    });

    console.log(arr);
    console.log(res);
})();