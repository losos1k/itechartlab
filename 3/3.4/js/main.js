var insExp;

var findValueBtn = document.getElementById("findValueBtn");

var result = document.getElementById("result");

findValueBtn.addEventListener("click", function(){btnClick(tree.findValue)});


function btnClick(sortFunc){
    insExp = document.getElementById("insExp").value;
    if (/^[/0-9\s]+$/.test(insExp)) {
        result.innerHTML = sortFunc(insExp);
    }
    else {
        alert('Inputed data is incorrect!');
    }
}