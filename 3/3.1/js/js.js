var insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE;

function format(insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE){
    var DD = +insDate.substr(INPUT_TEMPLATE.indexOf('D'), INPUT_TEMPLATE.split('D').length - 1);
    var MM = +insDate.substr(INPUT_TEMPLATE.indexOf('M'), INPUT_TEMPLATE.split('M').length - 1);
    var YYYY = +insDate.substr(INPUT_TEMPLATE.indexOf('Y'), INPUT_TEMPLATE.split('Y').length - 1);
    OUTPUT_TEMPLATE = DD + '-' + MM + '-' + YYYY;
    var DATE = new Date(YYYY, (MM-1), DD); 
    console.log(DATE);      
    return OUTPUT_TEMPLATE;
}

//console.log(format('31102011', 'DDMMYYYY', 'DD-MM-YYYY'));
console.log(format('20130431', 'YYYYMMDD', 'DD-MM-YYYY'));

