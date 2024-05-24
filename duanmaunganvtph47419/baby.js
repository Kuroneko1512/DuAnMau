// Nút tài khoản
const userBtn = document.querySelector('#dangnhap');

// Div đăng nhập
const loginDiv = document.querySelector('#dangnhapuser');

// Khi click vào nút tài khoản
userBtn.addEventListener('click', () => {
  // Hiện div đăng nhập
  loginDiv.style.display = 'block'; 
});

// Khi click vào nút đóng
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
  // Ẩn div đăng nhập
  loginDiv.style.display = 'none';
});