//Değişkenleri tanımlıyoruz
var n,s;

//Değeri kullanıcıdan isteyelim
n=Number(prompt("n:"));

//for ile 1'den n'e kadar yazdıralım
document.write("for ile yazdırma<br>");
for(s=1; s<=n; s++){
    document.write(s+"<br>");
}

//while ile 1'den n'e kadar yazdıralım
document.write("while ile yazdırma<br>");
s=1;
while(s<=n){
    document.write(s+"<br>");
    s++;
}
