const slider = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
slider.addEventListener("input", (e) => {
  textEl.style.fontSize = e.currentTarget.value + "px";
});
