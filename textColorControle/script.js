// get colors

let colorText = document.querySelector("#color-text");
let colorBackground = document.querySelector("#color-background");

colorText.addEventListener("change", (e) => {
  document.querySelectorAll("p").forEach(function (p) {
    p.style.color = e.target.value;
  });
});

colorBackground.addEventListener("change", (e) => {
  document.querySelectorAll("p").forEach(function (p) {
    p.style.backgroundColor = e.target.value;
  });
});
