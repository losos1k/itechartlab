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
        if ((INPUT_TEMPLATE.indexOf('D')!=-1) && (INPUT_TEMPLATE.indexOf('M')!=-1) && (INPUT_TEMPLATE.indexOf('Y')!=-1) &&
            (OUTPUT_TEMPLATE.indexOf('D')!=-1) && ((OUTPUT_TEMPLATE.indexOf('M')!=-1) || (OUTPUT_TEMPLATE.indexOf('month')!=-1)) &&
            (OUTPUT_TEMPLATE.indexOf('Y')!=-1)){
            document.getElementById("resultDate").innerHTML = mod.format(insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE);
            }
        else {
            alert('Inputed date template is incorrect!');
        }

};

function btnFromNow (e){
    e.preventDefault();
    insDate = document.forms["form"].elements["insDate"].value;
    INPUT_TEMPLATE = document.forms["form"].elements["INPUT_TEMPLATE"].value;
    if ((INPUT_TEMPLATE.indexOf('D')!=-1) && (INPUT_TEMPLATE.indexOf('M')!=-1) && (INPUT_TEMPLATE.indexOf('Y')!=-1)){
            document.getElementById("resultFromNow").innerHTML = mod.fromNow(insDate, INPUT_TEMPLATE);
            }
        else {
            alert('Inputed date template is incorrect!');
        }
};