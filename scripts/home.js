function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

setInterval(() => {
  document.querySelectorAll(".title").forEach(element => {
    element.style.color = getRandomColor();
  });
}, 2000);