function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "yourpassword") {
        window.location.href = "team1.html";
    } else {
        alert("パスワードが間違っています。");
    }
}
