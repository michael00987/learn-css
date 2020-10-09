const move = document.querySelector('.move')
move.addEventListener("mousemove", (e) => {
  console.log(e)
  move.style.backgroundPositionX = -e.clientX/10 + "px";
  move.style.backgroundPositionY = -e.clientY/10 + "px";
});