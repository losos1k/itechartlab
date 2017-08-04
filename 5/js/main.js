(function ($) {
    $(document).ready(function (cb) {

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
            function validate(fileName, emailVal, passwordVal) {
                var promise = new Promise((resolve, reject) => {
                    emailVal && passwordVal && fileName ? resolve() : reject('you should fill all inputs');
                });
                return promise;
            }

            function onSuccess() {
                console.log('Success!');
            }

            validate(fileName, emailVal, passwordVal)
                .then(() => uploadFile(fileName, emailVal, passwordVal))
                .then(onSuccess)
                .catch(error => console.log('error', error))
        });
    });
})(jQuery);