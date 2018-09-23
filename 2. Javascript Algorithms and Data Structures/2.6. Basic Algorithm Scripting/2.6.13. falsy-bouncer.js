function bouncer(arr) {
    // Don't show a false ID to this bouncer.  
    const newArr = arr.filter(Boolean);
    console.log(newArr);
    return newArr;
}
bouncer([7, "ate", "", false, 9]);