const cont = document.querySelector(".container");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (let i = 0; i < 16; i++) {
  const bhado = document.createElement("div");
  bhado.classList.add("bhaado");
  cont.appendChild(bhado);
  bhado.style = "width: 25%; height: 25%;";
  bhado.addEventListener("mouseenter", () => {
    bhado.style.backgroundColor = getRandomColor();
  });
}
let n = 4;
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let first;
  for (let i = 0; i < n * n; i++) {
    first = cont.firstChild;
    first.remove();
  }
  n = prompt("How many columns/rows you wish to have? ");
  for (let i = 0; i < n * n; i++) {
    const bhado = document.createElement("div");
    bhado.classList.add("bhaado");
    cont.appendChild(bhado);
    bhado.style = `width: ${100 / n}%; height: ${100 / n}%;`;
    bhado.addEventListener("mouseenter", () => {
      bhado.style.backgroundColor = getRandomColor();
    });
  }
});
