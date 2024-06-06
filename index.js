var body = document.querySelector("body");
var bigfontBtn = document.querySelector(".bigFontBtn");
var normalFontBtn = document.querySelector(".normalFontBtn");

function bigfont() {
  body.classList.add("big");
}

function normalfont() {
  body.classList.remove("big");
}
bigfontBtn.onclick = bigfont;

normalFontBtn.onclick = normalfont;
