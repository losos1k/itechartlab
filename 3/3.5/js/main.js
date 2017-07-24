var insExp;

var subSumBtn = document.getElementById("subSumBtn"),
    searchBtn = document.getElementById("searchBtn");

var result = document.getElementById("result");

subSumBtn.addEventListener("click", function(){btnClick(mod.subSum)});
searchBtn.addEventListener("click", function(){btnClick(mod.search)});


function btnClick(func){
    insExp = document.getElementById("insExp").value;
    if (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/.test(insExp)) {
        result.innerHTML = func(insExp);
    }
    else {
        alert('Inputed data is incorrect!');
    }
}