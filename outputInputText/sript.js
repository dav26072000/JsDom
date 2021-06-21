let input = document.querySelector("input");
let p = document.querySelector("p");

input.addEventListener("keydown", () => {
  p.innerText = input.value;
});
