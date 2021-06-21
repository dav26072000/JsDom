let p = document.querySelector("p");
let text = document.querySelector("p").innerText.trim();
text = text.replaceAll("!", "😲");
text = text.replaceAll("?", "🤔");
p.innerHTML = text;
