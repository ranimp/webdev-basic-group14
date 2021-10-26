const elDate = document.querySelector("#date");
const elTime = document.querySelector("#time");

let months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
let myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let thisDay = date.getDay();
thisDay = myDays[thisDay];
let yy = date.getYear();
let year = (yy < 1000) ? yy + 1900 : yy;

let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

elDate.innerHTML = thisDay + ', ' + day + ' ' + months[month] + ' ' + year;
elTime.innerHTML = time;