'use strict';

window.ArrayProc = function () {

    var insExpArr;

    this.stringToArray = function (insExp) {
        insExpArr = insExp.match(/[0-9]+|-[0-9]+/g);

        for (var i = 0; i < insExpArr.length; i++) {
            insExpArr[i] = +insExpArr[i];
        };

        return insExpArr;
    };

    function setMax(obj) {
        const max_element = Math.max(obj.current, obj.positive);
        if (max_element > obj.max) {
            obj.max = max_element;
        }
    }

    this.getMaxSubSum = function (insExpArr) {

        return insExpArr.reduce((obj, elem, i) => {
            if (elem < 0) {
                obj.current = Math.max(obj.current + elem, 0);
                obj.positive = 0;
            } else {
                obj.current += elem;
                obj.positive += elem;
            }
            setMax(obj);
            if (i === insExpArr.length - 1) {
                return obj.max;
            }
            return obj;
        }, { max: 0, current: 0, positive: 0 });
    }

    this.searchMin = function (insExpArr) {
        return Math.min.apply(null, insExpArr);
    }

    this.searchMax = function (insExpArr) {
        return Math.max.apply(null, insExpArr);
    }

    this.searchMid = function (insExpArr) {
        function compareNumeric(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
        }

        insExpArr.sort(compareNumeric);
        var middle = insExpArr[Math.floor(insExpArr.length / 2)];

        return middle;
    }
};