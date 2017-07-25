function DateFormatter(insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE)   {   
    
        this.insDate = insDate;
        this.INPUT_TEMPLATE = INPUT_TEMPLATE;
        this.OUTPUT_TEMPLATE = OUTPUT_TEMPLATE;
      
        var DATE, year, month, day, date;

        var msInYear = 365 * 3600 * 24 * 1000;

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

        var setOutputDate = function (monthStyle) {

            return OUTPUT_TEMPLATE.replace(/D+/, day).replace(/M+|month/, monthStyle).replace(/Y+/, year);
        }

        var insDateValidate = function () {
            return ((/\d{2}/.test(day)) && (/\d{2}/.test(month)) && (/\d{4}/.test(year)));
        }

        this.format = function (insDate, INPUT_TEMPLATE, OUTPUT_TEMPLATE) {

            if (typeof (insDate) === 'number') {
                DATE = new Date(insDate);

                year = DATE.getFullYear();
                month = DATE.getMonth() + 1;
                day = DATE.getDate();

                date = setOutputDate(month);

            } else {
                day = getDate(/D/g);
                day < 10 ? day = '0' + day : day;

                month = getDate(/M/g);
                month < 10 ? month = '0' + month : month;

                year = getDate(/Y/g);

                if (insDateValidate()) {
                    date = setOutputDate(month);
                    if (/month/.test(OUTPUT_TEMPLATE)) {
                        date = setOutputDate(months[month - 1]);
                    }
                    return date;
                }
                else {
                    alert('Inputed date template is incorrect!');
                    resultDate.style.display = "none";
                }
            }
        };

        this.fromNow = function (insDate, INPUT_TEMPLATE) {

            day = getDate(/D/g);
            month = getDate(/M/g);
            year = getDate(/Y/g);

            if (insDateValidate()) {
                DATE = new Date(year, (month - 1), day);
                var now = new Date();

                diff = (now - DATE) / msInYear;
                absDiff = Math.abs(diff);

                return Math.round(absDiff) + ' years from now';
            }
            else {
                alert('Inputed date template is incorrect!');
                resultFromNow.style.display = "none";
            }
        };
    }