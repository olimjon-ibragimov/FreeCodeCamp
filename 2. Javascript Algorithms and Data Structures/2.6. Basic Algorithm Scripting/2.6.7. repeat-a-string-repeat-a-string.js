function repeatStringNumTimes(str, num) {
    // repeat after me  
    let newStr = [];
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            newStr.push(str);
        }
        // console.log(newStr.)    
        return newStr.join('');
    } else {
        return "";
    }
}
repeatStringNumTimes("abc", 3);