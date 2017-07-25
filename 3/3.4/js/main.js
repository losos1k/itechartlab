var insExp;

var findValueBtn = document.getElementById("findValueBtn");

var result = document.getElementById("result");

findValueBtn.addEventListener("click", function(){btnClick(tree.findValue)});


function btnClick(func){
    insExp = document.getElementById("insExp").value;
    if (/^[/0-9\s]+$/.test(insExp)) {
        result.innerHTML = func(insExp);
    }
    else {
        alert('Inputed data is incorrect!');
    }
}

var tree = new mod.Tree();
tree.createTreeFromJSON(jsonObject);
tree.findValue('2');