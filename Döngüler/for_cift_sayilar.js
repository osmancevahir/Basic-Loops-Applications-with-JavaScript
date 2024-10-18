
//Kullanıcıdan bir sayı girmesini istiyoruz
var sayi=Number(prompt("Bir sayı giriniz:"));

//Sayac değişkenini sayi değerine gelene kadar ikişer şekilde arttırıyoruz
for(var sayac=0; sayac<=sayi; sayac=sayac+2)
    document.write(sayac+"<br>");
    //Artış miktarını değiştirerek farklı şekillerde de arttırabiliriz