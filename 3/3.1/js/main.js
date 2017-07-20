//var date = mod.format(insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE);
var insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE;

submitBtn.onclick = function(){
    insDate = document.forms["form"].elements["insDate"].value;
    INPUT_TEMPLATE = document.forms["form"].elements["INPUT_TEMPLATE"].value;
    OUTPUT_TEMPLATE = document.forms["form"].elements["OUTPUT_TEMPLATE"].value;
}
