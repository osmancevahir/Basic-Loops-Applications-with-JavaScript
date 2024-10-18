//Değişkenlerimizi tanımılıyoruz
const password = 12345;//Değişken sabit olacağı için const kullandık
let userPassword;

do {
    //Kullanıcıdan şifresini girmesini istiyoruz
    userPassword = Number(prompt("Şifrenizi giriniz:"));

    //Eğer şifre yanlış ise kullanıcıya mesaj gönderelim
    if(userPassword != password){
        alert("Yanlış şifre! Tekrar deneyin");
    }
} while (userPassword != password);

//Doğru girilirse mesaj versin, bu sefer farklı bir şekilde çağırarak ekrana yazdıralım
document.getElementById("message").innerHTML = "Tebrikler şifre doğru";