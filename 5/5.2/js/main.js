(function ($) {
    $(document).ready(function () {
        var params1 = {
            defaultPicsAmount: 100,
            addedPicsAmount: 30
        };

        var params2 = {
            defaultPicsAmount: 50,
            addedPicsAmount: 20
        };

        $('#scrollArea1').dinamicDataScroll(params1);
        $('#scrollArea2').dinamicDataScroll(params2);
    });
})(jQuery);