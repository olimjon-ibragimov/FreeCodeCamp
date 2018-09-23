function getIndexToIns(arr, num) {
    // Find my place in this sorted array. 
    arr = arr.sort((a, b) => a - b);
    let numIndex;
    if (arr.indexOf(num) != -1) {
        numIndex = arr.indexOf(num);
    } else {
        let maxArr = arr.filter(x => x > num);
        if (maxArr.length > 0) {
            let nextToNum = Math.min(...maxArr);
            numIndex = arr.indexOf(nextToNum);
        } else {
            numIndex = arr.length;
        }
    }
    console.log(arr);
    console.log(num, numIndex);
    return numIndex;
}
getIndexToIns([2, 5, 10], 15);