document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.vertical-menu-area .nav-item > a');

    navLinks.forEach(function(navLink) {
        var dropdown = navLink.nextElementSibling;
        var dropdownIcon = navLink.querySelector('i');

        if (dropdown && dropdown.classList.contains('menu-dropdown-lv1')) {
            navLink.addEventListener('click', function(e) {
                e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

                // Xử lý dropdown menu cấp 1
                dropdown.classList.toggle('show');
                dropdownIcon.classList.toggle('fa-angle-down');
                dropdownIcon.classList.toggle('fa-angle-up');

                // Xử lý dropdown menu cấp 2
                var dropdownLv2Links = dropdown.querySelectorAll('.nav-dropdown-item-lv1 > a');
                dropdownLv2Links.forEach(function(dropdownLv2Link) {
                    var dropdownLv2 = dropdownLv2Link.nextElementSibling;
                    if (dropdownLv2 && dropdownLv2.classList.contains('menu-dropdown-lv2')) {
                        dropdownLv2Link.addEventListener('click', function(e) {
                            e.preventDefault();
                            dropdownLv2.classList.toggle('show');
                            dropdownLv2Link.querySelector('i').classList.toggle('fa-angle-right');
                            dropdownLv2Link.querySelector('i').classList.toggle('fa-angle-down');
                        });
                    }
                });
            });
        }
    });
});
