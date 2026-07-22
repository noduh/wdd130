const hamburger_button = document.getElementById("hamburger");
const nav_menu = document.getElementById("nav-links");
const hamburger_open_symbol = document.getElementById("open-hamburger");
const hamburger_close_symbol = document.getElementById("close-hamburger");
const cookie_form = document.getElementById("cookie-form")
const cookie_popup = document.getElementById("cookie-popup")

hamburger_button.addEventListener("click", () => toggle_navigation(nav_menu, hamburger_open_symbol, hamburger_close_symbol, hamburger_button));

function toggle_navigation(nav_menu, hamburger_open_symbol, hamburger_close_symbol, hamburger_button) {
    if (!nav_menu || !hamburger_open_symbol || !hamburger_close_symbol) {
        return;
    }

    const is_hidden = window.getComputedStyle(nav_menu).display === "none";

    nav_menu.style.display = is_hidden ? "flex" : "none";
    hamburger_open_symbol.style.display = is_hidden ? "none" : "inline-block";
    hamburger_close_symbol.style.display = is_hidden ? "inline-block" : "none";
}

cookie_form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (cookie_form.checkValidity()) {
        cookie_popup.style.display = "none";
    }
});