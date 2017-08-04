(function ($) {
    jQuery.fn.dragAndDrop = function (onAdded) {

        var dropArea = $(this);

        dropArea.on('dragenter', function (e) {
            e.stopPropagation();
            e.preventDefault();

            $(this).addClass('drop-area_hovered');
        });

        dropArea.on('dragover', function (e) {
            e.stopPropagation();
            e.preventDefault();
        });

        dropArea.on('drop', function (e) {
            e.stopPropagation();
            e.preventDefault();

            $(this).addClass('drop-area_hovered');
            e.dataTransfer = e.originalEvent.dataTransfer;
            var files = e.dataTransfer.files;

            (function imgHandler() {
                var reader = new FileReader();
                reader.onload = function (event) {
                    var pathToPic = reader.result;
                    dropArea.append("<img src='" + pathToPic + "'>");
                }
                reader.readAsDataURL(files[0]);
            })();
            var namePic = files[0].name;
            console.log(files)

            if ($.isFunction(onAdded)) {
                onAdded(namePic);
            }
        });
    };
})(jQuery);