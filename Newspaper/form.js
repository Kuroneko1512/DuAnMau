var form = document.getElementById("1");
console.log(form);
form.onsubmit = function (event) {
    event.preventDefault();
    let username = form.username.value;
    let phone = form.phone.value;
    let email = form.email.value;
    let password = form.password.value;
    let new_pass = form.new_pass.value;
    let place = form.place.value;
    let myCheck = form.myCheck.checked;
    let formValid = true;

    const errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
        let element = errors[i];
        element.setAttribute("style", "display: none");
    }
    
    if (username == "")
    {
        formValid = false;
        let p = document.getElementById("validate_username");
        p.setAttribute("style", "display: block");
        p.innerText = "Nhập họ và tên";
    }
    if (phone == "")
    {
        formValid = false;
        let p = document.getElementById("validate_phone");
        p.setAttribute("style", "display: block");
        p.innerText = "Nhập số điện thoại";
    }

    if (email == "")
    {
        formValid = false;
        let p = document.getElementById("validate_email");
        p.setAttribute("style", "display: block");
        p.innerText = "Nhập email";
    }

    if (password == "")
    {
        formValid = false;
        let p = document.getElementById("validate_password");
        p.setAttribute("style", "display: block");
        p.innerText = "Nhập mật khẩu";
    }

    if (new_pass == "")
    {
        formValid = false;
        let p = document.getElementById("validate_newpass");
        p.setAttribute("style", "display: block");
        p.innerText = "Xác nhận mật khẩu";
    }

    if (place == "")
    {
        formValid = false;
        let p = document.getElementById("validate_place");
        p.setAttribute("style", "display: block");
        p.innerText = "Chọn địa chỉ";
    }

    if (myCheck == false)
    {
        formValid = false;
        let p = document.getElementById("validate_myCheck");
        p.setAttribute("style", "display: block");
        p.innerText = "Tích vào ô";
    }


    let p = document.getElementById("validate");
    p.setAttribute("style", "display: block");
    if (formValid) {
        p.innerText = "Hoàn thành"
    } else {
        p.innerText = "form lỗi"
    }
}
