$(document).ready(function() {
    // Xử lí đăng nhập
    $("#loginForm").submit(function(e) {
        e.preventDefault();
        // Lấy dữ liệu từ form
        var email = $("#emailLogin").val();
        var password = $("#passwordLogin").val();
        // Xử lí đăng nhập ở đây (có thể sử dụng Ajax để gửi yêu cầu đăng nhập đến server)
        console.log("Đăng nhập với email:", email, "và mật khẩu:", password);
    });

    // Xử lí đăng ký
    $("#registerForm").submit(function(e) {
        e.preventDefault();
        // Lấy dữ liệu từ form
        var fullname = $("#fullname").val();
        var email = $("#emailRegister").val();
        var password = $("#passwordRegister").val();
        // Xử lí đăng ký ở đây (có thể sử dụng Ajax để gửi yêu cầu đăng ký đến server)
        console.log("Đăng ký với họ tên:", fullname, "email:", email, "và mật khẩu:", password);
    });
});