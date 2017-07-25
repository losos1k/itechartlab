function InputData(insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE) {

    this.insDate = insDate;
    this.INPUT_TEMPLATE = INPUT_TEMPLATE;
    this.OUTPUT_TEMPLATE = OUTPUT_TEMPLATE;

    this.inputTemplateValidate = function () {
        return (INPUT_TEMPLATE.indexOf('D') != -1) && (INPUT_TEMPLATE.indexOf('M') != -1) && (INPUT_TEMPLATE.indexOf('Y') != -1);
    }
    this.outputTemplateValidate = function () {
        return (OUTPUT_TEMPLATE.indexOf('D') != -1) &&
            ((OUTPUT_TEMPLATE.indexOf('M') != -1) || (OUTPUT_TEMPLATE.indexOf('month') != -1)) &&
            (OUTPUT_TEMPLATE.indexOf('Y') != -1);
    }
};

(function inputHandler() {
    var submitBtn = document.getElementById("submitBtn");
    var fromNow = document.getElementById("fromNow");
    var resultDate = document.getElementById("resultDate");
    var resultFromNow = document.getElementById("resultFromNow");

    submitBtn.addEventListener("click", btnClick);
    fromNow.addEventListener("click", btnFromNow);

    function btnClick(e) {
        e.preventDefault();
        var inputData = new InputData(insDate.value, INPUT_TEMPLATE.value, OUTPUT_TEMPLATE.value);
        var dateFormat = new DateFormatter(insDate.value, INPUT_TEMPLATE.value, OUTPUT_TEMPLATE.value);
        if (inputData.inputTemplateValidate() && inputData.outputTemplateValidate()) {
            resultDate.innerHTML = dateFormat.format();
        }
        else {
            resultDate.innerHTML = 'Inputed data is incorrect!';
        }
    };

    function btnFromNow(e) {
        e.preventDefault();
        var inputData = new InputData(insDate.value, INPUT_TEMPLATE.value);
        var dateFormat = new DateFormatter(insDate.value, INPUT_TEMPLATE.value);
        if (inputData.inputTemplateValidate()) {
            resultFromNow.innerHTML = dateFormat.fromNow();
        }
        else {
            resultDate.innerHTML = 'Inputed data is incorrect!';
        }
    };
})();