
var sayac=1, toplam=0;//Tek satırda iki değişken tanımladık
while (sayac<=5) {
    document.write("Sayaç:"+ sayac);
    toplam=toplam+sayac;
    document.write(" Toplam:"+ toplam);
    sayac++;
    document.write("<br>");
}
document.write("Toplam: "+toplam);