/*
! tarayıcıların depolama alanlari
localStorage ve sessionStorage, tarayıcının sundugu iki farklı web depolama alanı
*/

//local storage veri ekleme

localStorage.setItem("kullaniciAdi", "ömer");
// localStorage den veri çekme

const kullaniciAdi = localStorage.getItem("kullaniciAdi");
console.log(kullaniciAdi);