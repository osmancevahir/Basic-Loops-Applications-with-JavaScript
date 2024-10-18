//sayi adında bir değişken tanımladık
var sayi;

do{
    //sayi sıfırdan küçük olduğu zamanda aşağıdaki işlemleri yap
    sayi = Number(prompt("Pozitif bir sayı giriniz:"));
}while(sayi<=0);
document.write(sayi);