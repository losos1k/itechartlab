(function inputData() {
    var insExp, insJson;
    var findValueBtn = document.getElementById("findValueBtn");
    var result = document.getElementById("result");

    findValueBtn.addEventListener("click", btnClick);

    function btnClick() {
        var tree = new Tree();
        insExp = document.getElementById("insExp").value;
        insJson = document.getElementById("insJson").value;
        tree.createTreeFromJSON(insJson);        
        if (/[0-9]|[a-z]/.test(insExp)) {
            result.innerHTML = tree.findValue(insExp);
        }
        else {
            result.innerHTML = 'Inputed data is incorrect!';
        }
    }
    
})();