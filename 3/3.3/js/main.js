var insExp;

var bubbleSortBtn = document.getElementById("bubbleSortBtn"),
    insertionSortBtn = document.getElementById("insertionSortBtn"),
    quickSortBtn = document.getElementById("quickSortBtn"),
    selectionSortBtn = document.getElementById("selectionSortBtn");

var result = document.getElementById("result");

bubbleSortBtn.addEventListener("click", function(){btnClick(mod.bubbleSort)});
insertionSortBtn.addEventListener("click", function(){btnClick(mod.insertionSort)});
quickSortBtn.addEventListener("click", function(){btnClick(mod.quickSort)});
selectionSortBtn.addEventListener("click", function(){btnClick(mod.selectionSort)});


function btnClick(sortFunc){
    insExp = document.getElementById("insExp").value;
    if (/[1-9]|-[1-9]+/.test(insExp)) {
        var insExpArr = mod.stringToArray(insExp);
        result.innerHTML = sortFunc(insExpArr);
    }
    else {
        result.innerHTML = 'Inputed data is incorrect!';
    }
}