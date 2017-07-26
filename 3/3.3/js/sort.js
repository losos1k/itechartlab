var sort = (function () {

    var stringToArray = function (insExp) {
        insExpArr = insExp.match(/[0-9]+|-[0-9]+/g);

        for (var i = 0; i < insExpArr.length; i++) {
            insExpArr[i] = +insExpArr[i];
        };

        return insExpArr;
    };


    var bubbleSort = function (insExpArr) {
        for (var i = insExpArr.length - 1; i > 0; i--) {
            var counter = 0;

            for (var j = 0; j < i; j++) {

                if (insExpArr[j] > insExpArr[j + 1]) {
                    var temp = insExpArr[j];
                    insExpArr[j] = insExpArr[j + 1];
                    insExpArr[j + 1] = temp;
                    counter++;
                }
            }

            if (counter == 0) {
                break;
            }
        }

        return insExpArr;
    }


    var insertionSort = function (insExpArr) {

        for (var i = 0; i < insExpArr.length; i++) {
            var elem = insExpArr[i],
                j = i - 1;

            while (j >= 0 && insExpArr[j] > elem) {
                insExpArr[j + 1] = insExpArr[j];
                j--;
            }
            insExpArr[j + 1] = elem;
        }

        return insExpArr;
    }

    function quickSort(insExpArr) {
        if (insExpArr.length == 0) return [];
        var a = [], b = [], p = insExpArr[0];

        for (var i = 1; i < insExpArr.length; i++) {
            if (insExpArr[i] < p) a[a.length] = insExpArr[i];
            else b[b.length] = insExpArr[i];
        }

        return quickSort(a).concat(p, quickSort(b));
    }

    var selectionSort = function (insExpArr) {

        for (var i = 0; i < insExpArr.length - 1; i++) {
            var min = i;

            for (var j = i + 1; j < insExpArr.length; j++) {
                if (insExpArr[j] < insExpArr[min]) {
                    min = j;
                }
            }

            var temp = insExpArr[min];
            insExpArr[min] = insExpArr[i];
            insExpArr[i] = temp;
        }

        return insExpArr;
    }


    return {
        stringToArray,
        bubbleSort,
        insertionSort,
        quickSort,
        selectionSort
    }

})();