(function () {
    var insExp;
    var subSumBtn = document.getElementById("subSumBtn"),
        searchMinBtn = document.getElementById("searchMinBtn"),
        searchMaxBtn = document.getElementById("searchMaxBtn"),
        searchMidBtn = document.getElementById("searchMidBtn");

    var result = document.getElementById("result");

    subSumBtn.addEventListener("click", getMaxSubSumFunc);
    searchMinBtn.addEventListener("click", searchMinFunc);
    searchMaxBtn.addEventListener("click", searchMaxFunc);
    searchMidBtn.addEventListener("click", searchMidFunc);

    function getMaxSubSumFunc(func) {
        insExp = document.getElementById("insExp").value;
        if (/[1-9]|-[1-9]/.test(insExp)) {
            var arrayProc = new ArrayProc(insExp.value);
            var insExpArr = arrayProc.stringToArray(insExp);
            result.innerHTML = arrayProc.getMaxSubSum(insExpArr);
        }
        else {
            result.innerHTML = 'Inputed data is incorrect!';
        }
    }

    function searchMinFunc(func) {
        insExp = document.getElementById("insExp").value;
        if (/[1-9]|-[1-9]/.test(insExp)) {
            var arrayProc = new ArrayProc(insExp.value);
            var insExpArr = arrayProc.stringToArray(insExp);
            result.innerHTML = arrayProc.searchMin(insExpArr);
        }
        else {
            result.innerHTML = 'Inputed data is incorrect!';
        }
    }

    function searchMaxFunc(func) {
        insExp = document.getElementById("insExp").value;
        if (/[1-9]|-[1-9]/.test(insExp)) {
            var arrayProc = new ArrayProc(insExp.value);
            var insExpArr = arrayProc.stringToArray(insExp);
            result.innerHTML = arrayProc.searchMax(insExpArr);
        }
        else {
            result.innerHTML = 'Inputed data is incorrect!';
        }
    }

    function searchMidFunc(func) {
        insExp = document.getElementById("insExp").value;
        if (/[1-9]|-[1-9]/.test(insExp)) {
            var arrayProc = new ArrayProc(insExp.value);
            var insExpArr = arrayProc.stringToArray(insExp);
            result.innerHTML = arrayProc.searchMid(insExpArr);
        }
        else {
            result.innerHTML = 'Inputed data is incorrect!';
        }
    }

})();
