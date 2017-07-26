(function inputData() {
    var insExp, insJson;
    var findValueBtn = document.getElementById("findValueBtn");
    var result = document.getElementById("result");

    findValueBtn.addEventListener("click", btnClick);

    function btnClick() {
        var tree = new Tree();
        insExp = document.getElementById("insExp").value;
        insJson = document.getElementById("insJson").value;

        if (/[0-9a-zA-Z]/.test(insExp)) {
            try {
                tree.createTreeFromJSON(JSON.parse(insJson));
                result.innerHTML = tree.findValue(insExp);
            } catch (e) {
                result.innerHTML = 'Indalid JSON';
            }
        }
        else {
            result.innerHTML = 'Inputed data is incorrect!';
        }
    }
})();