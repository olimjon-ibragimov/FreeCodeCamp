function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], func(arr[i]));
        if (func(arr[i])) {
            num = arr[i];
            return num;
        }
    }
}
// findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
});