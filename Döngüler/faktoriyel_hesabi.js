//Değişkenlerimizi tanımlıyoruz
var n, s, f=1;

//n değerini kullanıcıdan isteyelim
n=Number(prompt("İstediğiniz değeri giriniz:"));

//Formülü hesaplamayı yazma
for(s=1; s<=n; s++){
    f=f*s;
}
document.write(n+" Faktöriyel: "+f);
  