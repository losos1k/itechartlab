var insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE;

function format(insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE){
    var months = ['January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October',
        'November',
        'December'];
    var day = +insDate.substr(INPUT_TEMPLATE.search(/D/), INPUT_TEMPLATE.match(/D/g).length);
    var month = +insDate.substr(INPUT_TEMPLATE.search(/M/), INPUT_TEMPLATE.match(/M/g).length);
    var year = +insDate.substr(INPUT_TEMPLATE.search(/Y/), INPUT_TEMPLATE.match(/Y/g).length);
    var date = OUTPUT_TEMPLATE.replace(/D+/, day).replace(/M+/, month).replace(/Y+/, year);      
    var DATE = new Date(year, (month-1), day); 

    if (/month/.test(OUTPUT_TEMPLATE)){
        date = OUTPUT_TEMPLATE.replace(/D+/, day).replace(/month/, months[month-1]).replace(/Y+/, year); 
    };

    return date;
}

console.log(format('31102011', 'DDMMYYYY', 'DD-MM-YYYY'));
console.log(format('20130430', 'YYYYMMDD', 'DD-MM-YYYY'));
console.log(format('2013-06-29', 'YYYY-MM-DD', 'DD month YYYY'));




