function dangky() {

    var user = document.getElementById("userdk").value;
    var pass = document.getElementById("passdk").value;

    let userdk = localStorage.getItem("username");

    if (user == "" || pass == "") {
        document.getElementById("thongbao").innerHTML = "Vui lòng nhập đầy đủ thông tin";
        document.getElementById("thongbao").style.color = "red";
        return;
    }

    // kiểm tra trùng tài khoản
    if(user == userdk){
        document.getElementById("thongbao").innerHTML = "Tài khoản đã tồn tại!";
        document.getElementById("thongbao").style.color = "red";
        return;
    }

    // lưu tài khoản
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    document.getElementById("thongbao").innerHTML = "Đăng kí tài khoản thành công";
    document.getElementById("thongbao").style.color = "green";

    document.getElementById("DangKy").style.transform = "scale(0.9)";
    setTimeout(function () {
        document.getElementById("DangKy").style.transform = "scale(1)";
    }, 150);
}

function dangnhap() {

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let userdk = localStorage.getItem("username");
    let passdk = localStorage.getItem("password");

    if (user == userdk && pass == passdk) {

        document.getElementById("thongbao").innerHTML = "Đăng nhập thành công... Chờ chuyển hướng";
        document.getElementById("thongbao").style.color = "green";

    
        document.getElementById("DangNhap").style.transform = "scale(0.9)";
        setTimeout(function () {
            document.getElementById("DangNhap").style.transform = "scale(1)";
        }, 150);

        setTimeout(function () {
           window.open("Traitim.html","_blank");
        }, 1000);

    } else {

        document.getElementById("thongbao").innerHTML = "Sai tài khoản hoặc mật khẩu!";
        document.getElementById("thongbao").style.color = "red";
    }
}


function phuchoi(){

document.getElementById("user").value = "";
document.getElementById("pass").value = "";

document.getElementById("thongbao").innerHTML = "";

}

