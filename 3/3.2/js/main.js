function InputData(insExp) {
    this.insExp = insExp;
}

(function inputHandler() {
    var submitBtn = document.getElementById("submitBtn");
    var result = document.getElementById("result");

    submitBtn.addEventListener("click", btnClick);

    function btnClick(e) {
        e.preventDefault();
        var inputData = new InputData(insExp.value);
        var calculator = new Calculator(insExp.value);
        insExp = document.getElementById("insExp").value;
        if (/^[-+()*\/0-9\.\s]+$/.test(insExp)) {
            result.innerHTML = calculator.inputStrParse(insExp.value);
        }
        else {
            alert('Inputed data is incorrect!');
        }
    };
})();