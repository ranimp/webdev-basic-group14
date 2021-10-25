const elInputNama = document.querySelector("#input-nama")
const elInputEmail = document.querySelector("#input-email");
const elInputJurusan = document.querySelector("#input-jurusan");
const elInputAngkatan = document.querySelector("#input-angkatan");
const elInputTelepon = document.querySelector("#input-telepon");
const elInputAlamat = document.querySelector("#input-alamat");
const elInputAlasan = document.querySelector("#input-alasan");
const elInputCheck = document.querySelector("#input-check");


const elForm = document.querySelector("#form");
const emailValidator = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]*/;
const namaValidator = /[a-zA-Z]/;

const elBtnSubmit = document.querySelector("#btn-submit").addEventListener("click", (event) => {
  event.preventDefault()
  if (elInputNama.value.length === 0) {
    alert("nama wajib diisi")
  }
  else if (!elInputEmail.value.match(emailValidator)){
    alert('tolong masukkan email yang valid')
  } 
  else if (elInputJurusan.value.length === 0){
    alert("jurusan wajib diisi")
  }
  else if (elInputAngkatan.value.length != 4) {
    alert ("tolong masukkan tahun angkatan yang valid")
  } 
  else if (elInputTelepon.value.length < 10){
    alert ("tolong masukkan nomor telepon yang valid")
  } 
  else if (elInputAlamat.value.length === 0){
    alert ("alamat wajib diisi")
  } 
  else if (elInputJurusan.value.length === 0){
    alert("alamat wajib diisi")
  }
  else if (elInputAlasan.value.length === 0){
    alert("alasan wajib diisi")
  }
  else if (elInputCheck.checked === false) {
    alert ("silahkan centang data")
  }  
  else {
    location.href = "/done-oprec.html";
  }
})