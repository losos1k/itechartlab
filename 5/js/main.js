(function ($) {
    $(document).ready(function () {

        $('.drop-area').dragAndDrop();

        $('#submitForm').click(function () {
            function checkForm() {
                $('input').each(function () {
                    if ($('input').val().length > 0) {
                        return true;
                    } else {
                        return false;
                    }
                });
            };

            var promise = new Promise((resolve, reject) => {
                checkForm('#input-text') ? resolve(result) : reject();
            });

            promise
                .then(
                result => console.log('Fulfilled: '),
                error => console.log('Rejected')
                );
        });
    });
})(jQuery);