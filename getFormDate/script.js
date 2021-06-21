let myForm = document.querySelector("#form");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formContent = e.target;
  let formData = new FormData(formContent);
  let allInfo = [...formData.entries()];
  alert(JSON.stringify(allInfo));
});
