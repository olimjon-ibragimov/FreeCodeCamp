function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)]

    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
}
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);