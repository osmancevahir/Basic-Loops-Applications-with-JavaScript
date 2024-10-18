//Değişkenlerimizi tanımlıyoruz
var x, y, toplam=0;

//Kullanıcıdan iki değer alalım
x=Number(prompt("Küçük sayıyı giriniz:"));
y=Number(prompt("Büyük sayıyı giriniz"));

//x'ten y'e kadar olan sayıları toplayalım
// for(; x<=y; x++){
//     toplam = toplam + x;
// }



while (x<=y) {
    toplam = toplam + x;
    x++;
}

document.write(toplam);