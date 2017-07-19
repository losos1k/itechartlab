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

    var obj = {
        'day': 'D',
        'month': 'M',
        'year': 'Y'
    }
    var DATE, year, month, day, date;
    if (typeof(insDate) === 'number'){
        DATE = new Date(insDate);
        year = DATE.getFullYear();
        month = DATE.getMonth()+1;
        day = DATE.getDate();
        date = OUTPUT_TEMPLATE.replace(/D+/, day).replace(/M+/, month).replace(/Y+/, year);      
    } else{
        day = +insDate.substr(INPUT_TEMPLATE.search(/D/), INPUT_TEMPLATE.match(/D/g).length);
        if (day < 10) day = '0' + day;        
        month = +insDate.substr(INPUT_TEMPLATE.search(/M/), INPUT_TEMPLATE.match(/M/g).length);
        if (month < 10) month = '0' + month;
        year = +insDate.substr(INPUT_TEMPLATE.search(/Y/), INPUT_TEMPLATE.match(/Y/g).length);
        if ((/\d{2}/.test(day)) && (/\d{2}/.test(month)) && (/\d{4}/.test(year))) {
            date = OUTPUT_TEMPLATE.replace(/D+/, day).replace(/M+/, month).replace(/Y+/, year);      
            if (/month/.test(OUTPUT_TEMPLATE)){
                date = OUTPUT_TEMPLATE.replace(/D+/, day).replace(/month/, months[month-1]).replace(/Y+/, year); 
            }
        }
        
    }
    var DATE = new Date(year, (month-1), day); 
    function fromNow(){
        var now = new Date();
        diff = (now-DATE)/(365*3600*24*1000);
        return Math.round(diff) + ' years ago';
    };
    return date;
}

console.log(format('31102011', 'DDMMYYYY', 'DD-MM-YYYY'));
console.log(format('20130531', 'YYYYMMDD', 'DD.MM.YYYY'));
console.log(format('2013-06-29', 'YYYY-MM-DD', 'DD month YYYY'));
console.log(format(30000000000, 'DDMMYYYY', 'DD-MM-YYYY'));