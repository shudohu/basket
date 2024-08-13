function promptPassword() {
    var password = prompt("パスワードを入力してください:");
    if (password === "your") {
        window.location.href = "https://shudohu.github.io/basket/team1";
    } else {
        alert("パスワードが間違っています。");
    }
}
