//Değişkenlerimizi tanımlıyoruz
var s, n, toplam=0;

//Kullanıcıdan bir sayı girmesini istiyoruz
n=Number(prompt("İstediğiniz sayıyı giriniz"));

//Sabit olan sayımızı kullanıcının girdiği değere kadar bir döngüye sokuyoruz 
for(s=1; s<=n; s++){
    toplam = toplam + s;
}
document.write(n+"'e kadar olan sayıların toplamı: "+toplam+"<br>");