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
const namaValidator = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const angkatanValidator = /^20+[0-9]*$/;

const elHelpNama = document.querySelector("#nama-help")
const elHelpEmail = document.querySelector("#email-help");
const elHelpJurusan = document.querySelector("#jurusan-help");
const elHelpAngkatan = document.querySelector("#angkatan-help");
const elHelpTelepon = document.querySelector("#telepon-help");
const elHelpAlamat = document.querySelector("#alamat-help");
const elHelpAlasan = document.querySelector("#alasan-help");

const elBtnSubmit = document.querySelector("#btn-submit").addEventListener("click", (event) => {
  event.preventDefault()

  !elInputNama.value.match(namaValidator) ? elHelpNama.innerHTML = '<span style="color:red;">Masukkan nama yang valid</span>' : elHelpNama.innerHTML = ""

  elInputNama.value.length === 0 ? elHelpNama.innerHTML = '<span style="color:red;">Nama wajib diisi!</span>' : '';

  !elInputEmail.value.match(emailValidator) ? elHelpEmail.innerHTML = '<span style="color:red;">Masukkan email yang valid</span>' : elHelpEmail.innerHTML = "";

  elInputJurusan.value.length === 0 ? elHelpJurusan.innerHTML = '<span style="color:red;">Jurusan wajib diisi!</span>': elHelpJurusan.innerHTML = "";

  elInputAngkatan.value.length != 4 || !elInputAngkatan.value.match(angkatanValidator) ? elHelpAngkatan.innerHTML = '<span style="color:red;">Masukkan tahun angkatan yang valid</span>' : elHelpAngkatan.innerHTML = "";

  elInputTelepon.value.length < 10 ? elHelpTelepon.innerHTML = '<span style="color:red;">Masukkan nomor telepon yang valid</span>' : elHelpTelepon.innerHTML = "";

  elInputAlamat.value.length === 0 ? elHelpAlamat.innerHTML = '<span style="color:red;">Alamat wajib diisi!</span>' : elHelpAlamat.innerHTML = "";

  elInputAlasan.value.length === 0 ? elHelpAlasan.innerHTML = '<span style="color:red;">Alasan wajib diisi!</span>' : elHelpAlasan.innerHTML = "";

  elInputCheck.checked ? '' : alert ("silahkan centang data");

  if (elInputNama.value.match(namaValidator) && elInputNama.value.length > 0 && elInputEmail.value.match(emailValidator) && elInputJurusan.value.length > 0 && elInputAngkatan.value.length === 4 && elInputTelepon.value.length >= 10 && elInputAlamat.value.length > 0 && elInputAlasan.value.length > 0 && elInputCheck.checked === true){
    location.href = "/done-oprec.html";
  }
  
})