var insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE;

var submitBtn = document.getElementById("submitBtn");
var fromNow = document.getElementById("fromNow");

submitBtn.addEventListener("click", btnClick);
fromNow.addEventListener("click", btnFromNow);

function btnClick (e){
    e.preventDefault();
    insDate = document.forms["form"].elements["insDate"].value;
    INPUT_TEMPLATE = document.forms["form"].elements["INPUT_TEMPLATE"].value;
    OUTPUT_TEMPLATE = document.forms["form"].elements["OUTPUT_TEMPLATE"].value;
    document.getElementById("resultDate").innerHTML = mod.format(insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE);
};

function btnFromNow (e){
    e.preventDefault();
    insDate = document.forms["form"].elements["insDate"].value;
    INPUT_TEMPLATE = document.forms["form"].elements["INPUT_TEMPLATE"].value;
    document.getElementById("resultFromNow").innerHTML = mod.fromNow(insDate, INPUT_TEMPLATE);
};