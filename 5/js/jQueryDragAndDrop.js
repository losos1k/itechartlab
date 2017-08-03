(function ($) {
    jQuery.fn.dragAndDrop = function () {

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
                    $('.drop-area img').attr('src', event.target.result);
                }
                reader.readAsDataURL(files[0]);
            })();

            console.log(files);
        });
    };
})(jQuery);