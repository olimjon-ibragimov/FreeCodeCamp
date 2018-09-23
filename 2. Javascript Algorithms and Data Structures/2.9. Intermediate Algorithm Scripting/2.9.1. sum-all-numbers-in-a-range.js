function sumAll(arr) {


    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let arrOfNums = [];

    for (let i = min; i <= max; i++) {
        arrOfNums.push(i);
    }
    return arrOfNums.reduce((a, b) => a + b, 0);
}
nsumAll([1, 4]);