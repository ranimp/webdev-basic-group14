const elInputNama = document.querySelector("#input-nama")
const elInputEmail = document.querySelector("#input-email");
const elInputTelepon = document.querySelector("#input-telepon");
const elInputAlamat = document.querySelector("#input-alamat");
const elInputAlasan = document.querySelector("#input-alasan");
const elInputCheck = document.querySelector("#input-check");

const elForm = document.querySelector("#form");
const emailValidator = /[0-9]+@student.umrah.ac.id*/;
const namaValidator = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const angkatanValidator = /^20+[0-9]*$/;

const elHelpNama = document.querySelector("#nama-help")
const elHelpEmail = document.querySelector("#email-help");
const elHelpTelepon = document.querySelector("#telepon-help");
const elHelpAlamat = document.querySelector("#alamat-help");
const elHelpAlasan = document.querySelector("#alasan-help");

const elBtnSubmit = document.querySelector("#btn-submit").addEventListener("click", (event) => {
  event.preventDefault()

  !elInputNama.value.match(namaValidator) ? elHelpNama.innerHTML = '<span style="color:red;">Masukkan nama yang valid</span>' : elHelpNama.innerHTML = "";

  elInputNama.value.length === 0 ? elHelpNama.innerHTML = '<span style="color:red;">Nama wajib diisi!</span>' : '';

  !elInputEmail.value.match(emailValidator) ? elHelpEmail.innerHTML = '<span style="color:red;">Gunakan email dari UMRAH</span>' : elHelpEmail.innerHTML = "";

  elInputTelepon.value.length < 10 ? elHelpTelepon.innerHTML = '<span style="color:red;">Masukkan nomor telepon yang valid</span>' : elHelpTelepon.innerHTML = "";

  elInputAlamat.value.length === 0 ? elHelpAlamat.innerHTML = '<span style="color:red;">Alamat wajib diisi!</span>' : elHelpAlamat.innerHTML = "";

  elInputAlasan.value.length === 0 ? elHelpAlasan.innerHTML = '<span style="color:red;">Alasan wajib diisi!</span>' : elHelpAlasan.innerHTML = "";

  elInputCheck.checked ? '' : alert ("silahkan centang data");

  if (elInputNama.value.match(namaValidator) && elInputNama.value.length > 0 && elInputEmail.value.match(emailValidator) && elInputTelepon.value.length >= 10 && elInputAlamat.value.length > 0 && elInputAlasan.value.length > 0 && elInputCheck.checked === true){
    location.href = "/done-oprec.html";
  }
  
})