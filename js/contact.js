const elInputEmail = document.querySelector("#input-email");
const elInputMessage = document.querySelector("#input-message");
const elForm = document.querySelector("#form");
const emailValidator = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]*/;

const elBtnSubmit = document.querySelector("#btn-submit").addEventListener("click", (event) => {
  event.preventDefault()
  if (!elInputEmail.value.match(emailValidator)){
    alert('tolong masukkan email yang valid')
  } else if (elInputMessage.value.length <= 20){
    alert('tolong masukkan pesan lebih dari 20 karakter')
  } else {
    location.href = "/done-kontak.html";
  }
})