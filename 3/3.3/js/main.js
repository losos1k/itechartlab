(function () {
    var insExp;
    var bubbleSortBtn = document.getElementById("bubbleSortBtn"),
        insertionSortBtn = document.getElementById("insertionSortBtn"),
        quickSortBtn = document.getElementById("quickSortBtn"),
        selectionSortBtn = document.getElementById("selectionSortBtn");

    var result = document.getElementById("result");

    bubbleSortBtn.addEventListener("click", function () { btnClick(sort.bubbleSort) });
    insertionSortBtn.addEventListener("click", function () { btnClick(sort.insertionSort) });
    quickSortBtn.addEventListener("click", function () { btnClick(sort.quickSort) });
    selectionSortBtn.addEventListener("click", function () { btnClick(sort.selectionSort) });


    function btnClick(sortFunc) {
        insExp = document.getElementById("insExp").value;
        if (/[1-9]|-[1-9]+/.test(insExp)) {
            var insExpArr = sort.stringToArray(insExp);
            result.innerHTML = sortFunc(insExpArr);
        }
        else {
            result.innerHTML = 'Inputed data is incorrect!';
        }
    }
})();