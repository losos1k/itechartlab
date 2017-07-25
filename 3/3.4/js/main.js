(function inputData() {
    var insExp;
    var findValueBtn = document.getElementById("findValueBtn");
    var result = document.getElementById("result");

    findValueBtn.addEventListener("click", btnClick);

    function btnClick() {
        var tree = new Tree();
        tree.createTreeFromJSON(jsonObject);
        insExp = document.getElementById("insExp").value;
        if (/[0-9]|[a-z]/.test(insExp)) {
            result.innerHTML = tree.findValue(insExp);
        }
        else {
            alert('Inputed data is incorrect!');
        }
    }
    
})();
