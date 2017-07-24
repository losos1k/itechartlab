var insExp;

var subSumBtn = document.getElementById("subSumBtn"),
    searchMinBtn = document.getElementById("searchMinBtn"),
    searchMaxBtn = document.getElementById("searchMaxBtn"),
    searchMidBtn = document.getElementById("searchMidBtn");

var result = document.getElementById("result");

subSumBtn.addEventListener("click", function(){btnClick(mod.subSum)});
searchMinBtn.addEventListener("click", function(){btnClick(mod.searchMin)});
searchMaxBtn.addEventListener("click", function(){btnClick(mod.searchMax)});
searchMidBtn.addEventListener("click", function(){btnClick(mod.searchMid)});

function btnClick(func){
    insExp = document.getElementById("insExp").value;
    if (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/.test(insExp)) {
        result.innerHTML = func(insExp);
    }
    else {
        alert('Inputed data is incorrect!');
    }
}