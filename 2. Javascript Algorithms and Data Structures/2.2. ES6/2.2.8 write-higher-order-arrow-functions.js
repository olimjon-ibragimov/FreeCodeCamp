const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
    "use strict";
    // change code below this line
    const squaredIntegers = (arr.filter(x => x > 0 && Number.isInteger(x))).map(x => x * x);

    // change code above this line
    return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);