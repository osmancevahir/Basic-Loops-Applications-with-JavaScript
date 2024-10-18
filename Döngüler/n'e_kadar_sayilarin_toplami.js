//Değişkenlerimizi tanımlıyoruz
var n, s, toplam=0;

//Kullanıcıdan sayi girmesini isteyelim
n=Number(prompt("n:"));

//for ile 1'den n'e kadar toplamı yazma
for(s=1; s<=n; s++){
    toplam = toplam + s;
}

document.write("for toplam:"+toplam+"<br>");

//while ile 1'den n'e kadar toplamı yazma
s=1, toplam=0;

while (s<=n) {
    toplam = toplam + s;
    s++;
}

document.write("while toplam:"+toplam+"<br>");
