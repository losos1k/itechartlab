(function ($) {
    $.fn.dinamicDataScroll = function (receivedParams) {

        var wrap = $(this);
        var loading = false;

        var params = $.extend({}, $.fn.dinamicDataScroll.defaultParams, receivedParams);

        wrap.scroll(function () {
            if (!loading && this.scrollHeight - wrap.scrollTop() - wrap.height() < params.scrollStartPosition) {
                loading = true;
                wrap.innerHTML += getPics(params.addedPicsAmount)
                    .then(() => loading = false);
            }
        });

        function getPics(picsAmount) {
            return $.ajax({
                url: 'https://jsonplaceholder.typicode.com/photos',
                method: 'GET'
            })
                .then(function (data) {
                    for (var i = 0; i < picsAmount; i++) {
                        var thumbnailUrl = data[i].thumbnailUrl;

                        $("<img/>").attr("src", thumbnailUrl).appendTo(wrap);
                    }
                });
        };

        getPics(params.defaultPicsAmount);
    };

    $.fn.dinamicDataScroll.defaultParams = {
        defaultPicsAmount: 30,
        addedPicsAmount: 30,
        scrollStartPosition: 100
    };

})(jQuery);