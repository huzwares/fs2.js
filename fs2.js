var elem = document.getElementById("gallery");
var current = 0;
show();
function prev() {
    elem.children[current].style.display = "none";
    if (current == 0) {
        current = elem.children.length - 2;
    } else {
        current--;
    }
    show();
}
function next() {
    elem.children[current].style.display = "none";
    if (current == elem.children.length - 2) {
        current = 0;
    } else {
        current++;
    }
    show();
}
function show() {
    elem.children[current].style.display = "block";
}