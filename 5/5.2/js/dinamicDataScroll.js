(function ($) {
    jQuery.fn.dinamicDataScroll = function () {
        var wrap = $(this);

        $(window).scroll(function () {
            if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                wrap.innerHTML += getPics(30);
            }
        });

        function getPics(PicsAmount) {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/photos',
                method: 'GET'
            }).then(function (data) {
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
        getPics(65);
    };
})(jQuery);