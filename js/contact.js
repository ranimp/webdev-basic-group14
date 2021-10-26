const elInputEmail = document.querySelector("#input-email");
const elInputMessage = document.querySelector("#input-message");
const elForm = document.querySelector("#form");
const elEmailHelp = document.querySelector("#email-help");
const elMessageHelp = document.querySelector("#message-help");

const emailValidator = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]*/;

const elBtnSubmit = document.querySelector("#btn-submit").addEventListener("click", (event) => {
  event.preventDefault()
  
  !elInputEmail.value.match(emailValidator) ? elEmailHelp.innerHTML = '<span style="color:red">Masukkan email yang valid!</span>' : elEmailHelp.innerHTML = ''
  
  elInputMessage.value.length < 20 ? elMessageHelp.innerHTML = '<span style="color:red">Pesan harus lebih dari 20 karakter!</span>' : elMessageHelp.innerHTML = ''
  
  if (elInputEmail.value.match(emailValidator) && elInputMessage.value.length >= 20){
    location.href = "/done-kontak.html";
  }
})