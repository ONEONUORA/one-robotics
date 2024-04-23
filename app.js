var toggler = document.querySelector(".toggler");
var nav = document.querySelectorAll(".nav");

function toggleButton(){
    nav.forEach(nav=> nav.classList.toggle("nav-toggle"));
}


toggler.addEventListener("click", toggleButton);