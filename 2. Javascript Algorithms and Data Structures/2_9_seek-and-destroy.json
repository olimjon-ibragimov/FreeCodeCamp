function destroyer(arr) {
    // Remove all the values
    let args = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        while (args.indexOf(arguments[i]) != -1) {
            console.log(args.indexOf(arguments[i]));
            args.splice(args.indexOf(arguments[i]), 1);
        }
        console.log(args.indexOf(arguments[i]));
    }
    console.log(args);
    return args;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);