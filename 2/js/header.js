function myFunction() {
    var x = document.getElementById("header-menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}