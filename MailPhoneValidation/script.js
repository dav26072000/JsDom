let email = document.querySelector("#email");
let tel = document.querySelector("#tel");
let myForm = document.querySelector("#my-form");
let modal = document.querySelector(".modal");
let modalMessage = document.querySelector(".modal__content__message");

let timerMail = 0;
let timerTel = 0;

let mailValid = false;
let telValid = false;

email.addEventListener("keyup", validationTimer);
tel.addEventListener("keyup", validationTimer);

// mail and tel validation
function mailValidation(email) {
  const reMail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reMail.test(String(email).toLowerCase());
}

function telValidation(tel) {
  const reTel = /^(([+374]{4}|[0]{1}))?([1-9]{2})(\d{6})$/;
  return reTel.test(String(tel).toLowerCase());
}

// mail and tel validate with timeout
let timer = 0;
function validationTimer() {
  let val = this.value;
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (this.getAttribute("id") == "email") {
      if (mailValidation(val)) {
        this.style.border = "2px solid #5cb85c";
        mailValid = true;
        return true;
      } else {
        this.style.border = "2px solid #d9534f";
        mailValid = false;
        return false;
      }
    } else if (this.getAttribute("id") == "tel") {
      if (telValidation(val)) {
        this.style.border = "2px solid #5cb85c";
        telValid = true;
        return true;
      } else {
        this.style.border = "2px solid #d9534f";
        telValid = false;
        return false;
      }
    }
  }, 500);
}

// Forma submit

myForm.addEventListener("submit", (e) => {
  if (telValid === true && mailValid === true) {
    modal.style.opacity = 1;
    modalMessage.innerText = "All is okay 😄";
    document.addEventListener("click", function closeModal() {
      modal.style.opacity = 0;
      document.removeEventListener("click", closeModal);
    });
  } else {
    modal.style.opacity = 1;
    modalMessage.innerText = "Something went wrong 😖";
    document.addEventListener("click", function closeModal() {
      modal.style.opacity = 0;
      document.removeEventListener("click", closeModal);
    });
  }
  e.preventDefault();
});

function validateForm(e) {}

// modal test
if (modal.style.opacity === 1) {
}
