// the global variable
var globalTitle = "Winter Is Coming";
// Add your code below this line
function urlSlug(title) {
    var lowTitle = title.toLowerCase();
    var arrTitle = lowTitle.split(/\W/).filter(x => {
        return x !== '';
    });
    var urlTitle = arrTitle.join('-');
    console.log(urlTitle, title);
    return urlTitle;
}
// Add your code above this line
var winterComing = urlSlug(globalTitle);
// Should be "winter-is-coming"