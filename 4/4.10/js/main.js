(function () {
    var obj = {};
    
    obj.kek = function (a,b) {
        var a, b;

        this.method = function () {
            return a + b;
        };
        return this.method.apply(this, arguments);
    }

    console.log(obj.kek(2, 3));
})();