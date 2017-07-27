(function () {
    var arr = [1, 2, 3, 5, 0, 4, 0, 15, 12];

    var even = arr.filter(function (curr) {
        return curr % 2 === 0;
    });

    var avg = even.reduce(function (sum, curr) {
        return sum += curr;
    }) / even.length;

    console.log(arr);
    console.log(even);
    console.log(avg);
})();