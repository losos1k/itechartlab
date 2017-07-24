var mod = (function () {

    function setMax(obj) {
        const max_element = Math.max(obj.current, obj.positive);
        if (max_element > obj.max) {
            obj.max = max_element;
        }
    }


    function getMaxSubSum(arr) {
        return arr.reduce((obj, el, i) => {
            if (el < 0) {
                obj.current = Math.max(obj.current + el, 0);
                obj.positive = 0;
            } else {
                obj.current += el;
                obj.positive += el;
            }
            setMax(obj);
            if (i === arr.length - 1) {
                return obj.max;
            }
            return obj;
        }, { max: 0, current: 0, positive: 0 });
    }

    return {
    }

})();