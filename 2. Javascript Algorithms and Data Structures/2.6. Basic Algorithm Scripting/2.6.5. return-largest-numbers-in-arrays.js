function largestOfFour(arr) {
    // You can do this!  
    let maxs = [];
    for (let i = 0; i < arr.length; i++) {
        maxs.push(Math.max(...arr[i]));
        // sums.push(arr[i].reduce((a, b) => a+b, 0));  }    

        // console.log(sums);  
        return maxs;
    }
    largestOfFour([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
    ]);
    largestOfFour([
        [13, 27, 18, 26],
        [4, 5, 1, 3],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
    ]);
}