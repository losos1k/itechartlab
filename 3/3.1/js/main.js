(function inputData() {

    var insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE;

    var submitBtn = document.getElementById("submitBtn");
    var fromNow = document.getElementById("fromNow");
    var resultDate = document.getElementById("resultDate");
    var resultFromNow = document.getElementById("resultFromNow");


    submitBtn.addEventListener("click", btnClick);
    fromNow.addEventListener("click", btnFromNow);

    var inputTemplateValidate = function () {
        return (INPUT_TEMPLATE.indexOf('D') != -1) && (INPUT_TEMPLATE.indexOf('M') != -1) && (INPUT_TEMPLATE.indexOf('Y') != -1);
    }
    var outputTemplateValidate = function () {
        return (OUTPUT_TEMPLATE.indexOf('D') != -1) &&
            ((OUTPUT_TEMPLATE.indexOf('M') != -1) || (OUTPUT_TEMPLATE.indexOf('month') != -1)) &&
            (OUTPUT_TEMPLATE.indexOf('Y') != -1);
    }

    function btnClick(e) {
        e.preventDefault();
        insDate = document.getElementById("insDate").value;
        INPUT_TEMPLATE = document.getElementById("INPUT_TEMPLATE").value;
        OUTPUT_TEMPLATE = document.getElementById("OUTPUT_TEMPLATE").value;
        if (inputTemplateValidate() && outputTemplateValidate()) {
            resultDate.innerHTML = dateFormat.format(insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE);
        }
        else {
            alert('Inputed date template is incorrect!');
        }

    };

    function btnFromNow(e) {
        e.preventDefault();
        insDate = document.getElementById("insDate").value;
        INPUT_TEMPLATE = document.getElementById("INPUT_TEMPLATE").value;
        if (inputTemplateValidate()) {
            resultFromNow.innerHTML = dateFormat.fromNow(insDate, INPUT_TEMPLATE);
        }
        else {
            alert('Inputed date template is incorrect!');
        }
    };
})();