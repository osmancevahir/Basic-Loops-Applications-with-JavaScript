//do-while ile döngüyü yazma
//Değişekenlerimiz tanımlıyoruz
var s=1 , n;

// //n değerini alıyoruz
n=Number(prompt("n:"));

//do-while ile döngüyü yazma
//döngünün en az bir kere çalışmasını istiyorsak do-while ile yapılmalı
do {
    document.write("do-while döngüsü <br>");
    document.write("s="+s+"<br>");
     s++;
} while (s<=n);

//for ile döngüyü yazma
//döngünün ne kadar döneceği belliyse for döngüsü ile yapılmalı
for(s=1; s<=n; s++){
    document.write("for döngüsü <br>");
    document.write("s="+s+"<br>");
}

//while ile döngüyü yazma
s=1;
while(s<=n){
    document.write("while döngüsü <br>");
    document.write("s="+s+"<br>");
    s++;
}