var insExp;

var subSumBtn = document.getElementById("subSumBtn"),
    searchMinBtn = document.getElementById("searchMinBtn"),
    searchMaxBtn = document.getElementById("searchMaxBtn"),
    searchMidBtn = document.getElementById("searchMidBtn");

var result = document.getElementById("result");

subSumBtn.addEventListener("click", function(){btnClick(mod.getMaxSubSum)});
searchMinBtn.addEventListener("click", function(){btnClick(mod.searchMin)});
searchMaxBtn.addEventListener("click", function(){btnClick(mod.searchMax)});
searchMidBtn.addEventListener("click", function(){btnClick(mod.searchMid)});

function btnClick(func){
    insExp = document.getElementById("insExp").value;
    if (/[1-9]|-[1-9]/.test(insExp)) {
        var insExpArr = mod.stringToArray(insExp);
        result.innerHTML = func(insExpArr);
    }
    else {
        alert('Inputed data is incorrect!');
    }
}