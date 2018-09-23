var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Add your code below this line
    let newArr = arr.concat().sort((a, b) => a - b);

    return newArr;

    // Add your code above this line
}
nonMutatingSort(globalArray);