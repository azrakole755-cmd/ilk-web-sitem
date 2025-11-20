 function degistir() {
    const mesajlar = [
        "Çalıştı ya laa! 😱",
        "Telefonla bile yaptım!",
        "Yazılım buymuş demek!",
        "Yay gücü ∞",
        "Sen de yaparsın hadi!"
    ];
    const rastgele = Math.floor(Math.random() * mesajlar.length);
    document.getElementById("mesaj").innerHTML = "<strong>" + mesajlar[rastgele] + "</strong>";
}
