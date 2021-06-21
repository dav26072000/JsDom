let p = document.querySelector("p");
let text = document.querySelector("p").innerText.trim();
text.split(" ").forEach((e) => {
  if (e.length >= 8) {
    text = text.replaceAll(`${e}`, `<mark>${e}</mark>`);
    p.innerHTML = text;
  }
});
