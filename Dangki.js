function dangky(){

    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if(user == "" || pass == ""){
        document.getElementById("thongbao").innerHTML = "Vui lòng nhập đầy đủ thông tin";
        document.getElementById("thongbao").style.color = "red";
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    document.getElementById("thongbao").innerHTML = "Đăng kí tài khoản thành công";
    document.getElementById("thongbao").style.color = "green";
}