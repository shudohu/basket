function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "yourpassword") {
        window.location.href = "protected.html";
    } else {
        alert("パスワードが間違っています。");
    }
}
