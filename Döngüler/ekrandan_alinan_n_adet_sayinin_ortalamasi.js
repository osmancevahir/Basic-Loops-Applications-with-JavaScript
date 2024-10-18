//Değişkenlerimizi tanımlıyoruz
var s, n, sayi, toplam=0, ort=0;

//n değerini isteyelim
n=Number(prompt("Kaç sayının ortalamasını istiyorsunuz"));

//n adet sayıyı alalım ve toplayalım
for(s=1; s<=n; s++){
    sayi = Number(prompt("Sayı:"));
    toplam = toplam + sayi;
}

//ortalamayı hesaplayalım
ort = toplam / n;
document.write("Ortalama:"+ort);