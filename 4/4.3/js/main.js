(function () {
    var arr = ['kek', 'lol', 'azaza'];

    var res = arr.reduce(function (sum, curr) {
        return sum += curr.length;
    }, 0)

    console.log(arr);
    console.log(res);
})();