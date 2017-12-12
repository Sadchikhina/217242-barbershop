var link = document.querySelector(".enter");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".close");
var yourLogin = popup.querySelector("[name=login]");
var yourPass = popup.querySelector("[name=password]");
var storageLogin = localStorage.getItem("yourlogin");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  yourLogin.focus();
  if (storageLogin) {
    yourLogin.value = storageLogin;
    yourPass.focus();
  }
});

popup.addEventListener("submit", function (evt) {
  if (!yourLogin.value || !yourPass.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("yourlogin", yourLogin.value);
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

popup.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
  }
}
});
