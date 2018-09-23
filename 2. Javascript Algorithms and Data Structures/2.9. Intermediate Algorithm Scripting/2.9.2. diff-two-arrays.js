function diffArray(arr1, arr2) {

    var newArr = [];

    for (let item in arr1) {
        console.log(arr1[item], arr2.indexOf(arr1[item]));

        if (arr2.indexOf(arr1[item]) == -1) {
            newArr.push(arr1[item]);
        } else {
            arr2.splice(arr2.indexOf(arr1[item]), 1);
        }
        console.log(arr2);
        console.log(newArr);
    }
    if (arr2.length != 0) {
        for (let item in arr2) {
            console.log(arr2[item], arr1.indexOf(arr2[item]));

            if (arr1.indexOf(arr2[item]) == -1) {
                newArr.push(arr2[item]);
            }
            console.log(newArr);
        }
        console.log("There is something");
    }
    return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);