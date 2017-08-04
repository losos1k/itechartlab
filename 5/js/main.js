(function ($) {
    $(document).ready(function () {

        var inputData = $('.input-data-control');
        var email = $('#exampleInputEmail1');
        var password = $('#exampleInputPassword1');
        var fileName;

        $('.drop-area').dragAndDrop(function (name) {
            fileName = name;
        });

        $('#submitForm').click(function () {
            var emailVal = email.val();
            var passwordVal = password.val();
            function checkForm() {
                // return console.log(inputData.each(function () {
                //     if ($(this).val().length > 0) {
                //         return true;
                //     } else {
                //         return false;
                //     }
                // }));
                return true;
            };

            promise
                .then(validated => {
                    return fakePostQuery = function (emailVal, passwordVal, fileName) {
                        return true;
                    };
                })
                .then(promisePost => console.log('zaglushka'))
                .catch(err => console.log(err));
        });
    });
})(jQuery);