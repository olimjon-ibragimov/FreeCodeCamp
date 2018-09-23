function truncateString(str, num) {
    // Clear out that junk in your trunk  
    let arr = [];
    if (str.length > num) {
        arr.push(str.slice(0, num));
        arr.push('...');
        return arr.join('');
    }
    return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);