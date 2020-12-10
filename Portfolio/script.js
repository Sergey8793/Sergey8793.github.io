document.documentElement.setAttribute("style", "scroll-behavior: smooth;");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let t = document.getElementById("toTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        t.style.display = "block";
    } else {
        t.style.display = "none";
    }
}
