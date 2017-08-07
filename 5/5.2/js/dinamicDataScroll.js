(function ($) {
    jQuery.fn.dinamicDataScroll = function (receivedParams) {
        var defaultParams = {
            defaultPicsAmount: 30,
            addedPicsAmount: 30
        };
        var wrap = $(this);        

        $.extend(params = {}, defaultParams, receivedParams);

        wrap.scroll(function () {
            if (wrap.height() + wrap.scrollTop() == this.scrollHeight) {
                wrap.innerHTML += getPics(params.addedPicsAmount);
            }
        });

        function getPics(PicsAmount) {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/photos',
                method: 'GET'
            })
                .then(function (data) {
                    for (var i = 0; i < PicsAmount; i++) {
                        var albumId = data[i].albumId;
                        var id = data[i].id;
                        var title = data[i].title;
                        var url = data[i].url;
                        var thumbnailUrl = data[i].thumbnailUrl;

                        $("<img/>").attr("src", thumbnailUrl).appendTo(wrap);
                    }
                });
        };

        getPics(params.defaultPicsAmount);
    };
})(jQuery);