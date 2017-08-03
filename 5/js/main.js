(function () {
    (function ($) {
        jQuery.fn.dragAndDrop = function (inputBlockId, dropArea) {
            var imageLoader = document.getElementById(inputBlockId, );
            imageLoader.addEventListener('change', imgHandler, false);

            function imgHandler(e) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    $('#drop-area img').attr('src', event.target.result);
                }
                reader.readAsDataURL(e.target.files[0]);

            }

            var dropbox;
            dropbox = document.getElementById(dropArea);
            dropbox.addEventListener("dragenter", dragenter, false);
            dropbox.addEventListener("dragover", dragover, false);
            dropbox.addEventListener("drop", drop, false);

            function dragenter(e) {
                e.stopPropagation();
                e.preventDefault();

                $(this).css('border', '5px dashed #e8e8e8');
            }

            function dragover(e) {
                e.stopPropagation();
                e.preventDefault();
            }

            function drop(e) {
                e.stopPropagation();
                e.preventDefault();

                $(this).css('border', '5px dashed #e8e8e8');

                var files = e.dataTransfer.files;
                console.log(files);
                imageLoader.files = files;
            }
        };
    })(jQuery);



    $('drop-area').dragAndDrop('filePhoto', 'drop-area');
})(); 