function header_menu_popup() {
    var x = document.getElementById("header-menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}