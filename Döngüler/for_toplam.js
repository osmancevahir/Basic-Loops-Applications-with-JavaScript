//0 dan n'e kadar olan çift sayıların toplamı

var toplam=0;
var x=Number(prompt("X:"));//Kullanıcıdan sayı girmesini istiyoruz
for(var sayac=0; sayac<=x; sayac=sayac+2){//sayacın ikişer olarak artmasını istiyoruz
    //document.write(sayac+"<br>");
    toplam=toplam+sayac;
    document.write("sayac= "+sayac+" Toplam: "+toplam+"<br>");
    //Ekrana arka planda bu toplama işlemi nasıl ilerliyor diye görmek için
}

document.write("Toplam: "+toplam);