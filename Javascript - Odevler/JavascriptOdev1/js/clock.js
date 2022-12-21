window.onload = saatBilgisi;
let isim = prompt("İsimiz nedir?");
console.log("isim:",isim);
let karsilama =document.querySelector("#myName");
karsilama.innerHTML=`${isim}`;
saatBilgisi();
 function saatBilgisi()
{
   let zaman = new Date();//tarih saati al.
   let saat = zaman.getHours();
   let dakika = zaman.getMinutes();
   let saniye = zaman.getSeconds();

   let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
   
   zaman=document.getElementById("myClock").innerHTML = `${saat}:${dakika}:${saniye} ${gunler[zaman.getDay()]}`;//zaman idli elemente yazdır.
}
setInterval(saatBilgisi,1000);//1 saneye 1 saatBilgisi fonksiyonunu çalıştır.