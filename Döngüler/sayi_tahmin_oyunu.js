//Değişkenlerimizi tanımlıyoruz
var randomNumber = Math.floor(Math.random() * 10) + 1;

//Kullanıcıdan tahmin etmesini istediğimiz sayıyı girmesini istiyoruz
var sayi=Number(prompt("1 ile 10 arasında bir sayı tahmin ediniz."));

while (sayi != randomNumber) {
    sayi = prompt("Yanlış tahmin! Tekrar deneyiniz.");
}

document.write("Tebrikler doğru tahmin ettiniz.");