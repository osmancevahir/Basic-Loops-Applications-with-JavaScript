//Değişkenlerimizi yazdıralım
let s1, s2;

for(s1=1; s1<=10; s1++){
    //Döngü içinde döngü yazarak yukarıda ilk sayıya girdiğinde alt kısımda 10'a kadar devam edip tekrardan yukarıya dönecek
    for(s2=1; s2<=10; s2++){
        document.write(s1 + " x " + s2 + " = " + (s1*s2)+"<br>");
    }
    document.write("<br>");
}