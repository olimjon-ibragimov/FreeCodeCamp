function sentensify(str) {
    // Add your code below this line
    var newStr = str.split(/\W/);
    var newSentence = newStr.join(' ');
    return newSentence;
    // Add your code above this line
}
sentensify("May-the-force-be-with-you");