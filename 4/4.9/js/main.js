(function () {
    var arr = ['v1', 'v', 'val1', 'vvv3', 'val57439', '123'];

    var res = arr.filter(function (curr) {
        return curr.length > 2;
    });

    console.log(arr);
    console.log(res[0]);
})();