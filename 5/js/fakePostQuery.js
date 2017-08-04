(function () {
    window.promise = new Promise((resolve, reject) => {
        checkForm() ? resolve() : reject();
    });

    promise
        .then(validated => {
            return fakePostQuery = function (emailVal, passwordVal, fileName) {
                return true;
            };
        })
        .then(promisePost => console.log('zaglushka'))
        .catch(err => console.log(err));
})();
