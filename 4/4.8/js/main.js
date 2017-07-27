(function () {
    function fillArray(size = 0) {
        if (size <= 0) return [];
        return [Math.floor(Math.random() * 100)].concat(fillArray(size - 1));
    }
    var arr = fillArray(10);

    var sum = arr.reduce(function (sum, curr){
        return sum += curr;
    });

    console.log(arr);
    console.log(sum);
})();