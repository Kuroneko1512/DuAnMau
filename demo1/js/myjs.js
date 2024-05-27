// Kích hoạt menu xổ số khi nút có thuộc tính data-toggle="dropdown" được nhấp
document.addEventListener("DOMContentLoaded", function () {
    var dropdownToggle = document.querySelector(".dropdown-toggle");
    var dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownToggle.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (
            !dropdownToggle.contains(event.target) &&
            !dropdownMenu.contains(event.target)
        ) {
            dropdownMenu.classList.remove("show");
        }
    });
});

// Back to top button
window.addEventListener("scroll", function () {
    var backToTop = document.querySelector(".back-to-top");
    if (window.pageYOffset > 100) {
        backToTop.style.display = "inline";
    } else {
        backToTop.style.display = "none";
    }
});

document.querySelector(".back-to-top").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var btnDropdowns = document.querySelectorAll(".btn-drop-down");

    btnDropdowns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var dropdownMenu = btn.nextElementSibling;
            dropdownMenu.style.display =
                dropdownMenu.style.display === "block" ? "none" : "block";
        });
    });
});
