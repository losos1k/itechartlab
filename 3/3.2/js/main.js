var insExp;

var submitBtn = document.getElementById("submitBtn");
var result = document.getElementById("result");

submitBtn.addEventListener("click", btnClick);

function btnClick(e) {
    e.preventDefault();
    insExp = document.getElementById("insExp").value;
    if (/^[-+()*\/0-9\s]+$/.test(insExp)) {
        result.innerHTML = mod.calc(insExp);
    }
    else {
        alert('Inputed data is incorrect!');
    }
};

