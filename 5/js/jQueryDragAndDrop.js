(function ($) {
    jQuery.fn.dragAndDrop = function (onAdded) {

        $(this).on('dragenter', function (e) {
            e.stopPropagation();
            e.preventDefault();

            $(this).addClass('drop-area_hovered');
        });

        $(this).on('dragover', function (e) {
            e.stopPropagation();
            e.preventDefault();
        });

        $(this).on('drop', function (e) {
            e.stopPropagation();
            e.preventDefault();

            $(this).addClass('drop-area_hovered');
            e.dataTransfer = e.originalEvent.dataTransfer;
            var files = e.dataTransfer.files;

            (function imgHandler() {
                var reader = new FileReader();
                reader.onload = function (event) {
                    var pathToPic = reader.result;
                    $('.drop-area img').attr('src', pathToPic);
                }
                reader.readAsDataURL(files[0]);
            })();
            var namePic = files[0].name;

            if ($.isFunction(onAdded)) {
                onAdded(namePic);
            }
        });
    };
})(jQuery);