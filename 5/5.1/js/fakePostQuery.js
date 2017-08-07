(function () {
    window.uploadFile = function (fileName, login, password) {
        var promise = new Promise((resolve, reject) => {
            ((login.length < 3) || (password.length < 3)) ? reject('your login or password is too short') : resolve();
        });
        return promise;
    }
})();