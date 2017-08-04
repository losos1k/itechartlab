(function () {
    window.promise = new Promise((resolve, reject) => {
        checkForm() ? resolve() : reject();
    });
})();
