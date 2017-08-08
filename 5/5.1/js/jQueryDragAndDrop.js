(function ($) {
    $.fn.dragAndDrop = function (onAdded) {

        var dropArea = $(this);
        dropArea.append('<p>Drop your photo here</p>');

        function imgHandler(e) {
            var reader = new FileReader();
            var files = e.originalEvent.dataTransfer.files;
            reader.onload = function (event) {
                var pathToPic = reader.result;
                dropArea.append("<img src='" + pathToPic + "'>");
            }
            reader.readAsDataURL(files[0]);
            return files[0].name;
        };

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

            var namePic = imgHandler(e);

            if ($.isFunction(onAdded)) {
                onAdded(namePic);
            }
        });
    };
})(jQuery);