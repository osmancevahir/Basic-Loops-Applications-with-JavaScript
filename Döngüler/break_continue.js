//break ve continue nasıl çalıştığını anlamak için for döngüsü kuruyoruz
for(var i=1; i<=5; i++){
    // if(i==3) break; //döngüyü sonlandırır
    if(i==3) continue; //eşit olan sayacı yazdırmaz devam eder
    document.write("i="+i+"<br>");
}