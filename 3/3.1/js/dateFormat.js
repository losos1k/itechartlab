mod = (function() {

    var DATE, year, month, day, date;

    var msInYear = 365*3600*24*1000;

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

    var getDate = function (regEx) {

            return +insDate.substr(INPUT_TEMPLATE.search(regEx), INPUT_TEMPLATE.match(regEx).length);

        }

    var format = function(insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE) {
        
        if ((/[DMY]/g.test(INPUT_TEMPLATE)) && (/[DMY|DmonthY]/g.test(OUTPUT_TEMPLATE))){
            
            if (typeof(insDate) === 'number'){
            DATE = new Date(insDate);

            year = DATE.getFullYear();
            month = DATE.getMonth()+1;
            day = DATE.getDate();

            date = OUTPUT_TEMPLATE.replace(/D+/, day).replace(/M+/, month).replace(/Y+/, year);   

        } else{
            day = getDate(/D/g);
            day < 10 ? day = '0' + day : day; 

            month = getDate(/M/g);        
            month < 10 ? month = '0' + month : month; 

            year = getDate(/Y/g);
            
            if ((/\d{2}/.test(day)) && (/\d{2}/.test(month)) && (/\d{4}/.test(year))) {
                date = OUTPUT_TEMPLATE.replace(/D+/, day).replace(/M+/, month).replace(/Y+/, year);      
                if (/month/.test(OUTPUT_TEMPLATE)){
                    date = OUTPUT_TEMPLATE.replace(/D+/, day).replace(/month/, months[month-1]).replace(/Y+/, year); 
                    }
                }
            
            }
            
        return date; 
    } else {
            console.log('Error!');
        }   
    }

    var fromNow = function(insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE) {
        day = getDate(/D/g);

        month = getDate(/M/g);        

        year = getDate(/Y/g); 
        
        DATE = new Date(year, (month-1), day);  
        
        var now = new Date();
        
        diff = (now-DATE)/msInYear;

        return Math.round.abs(diff) + ' years ago';
    };

    return {
        format,
        fromNow
    }
    
})();

console.log(insDate);