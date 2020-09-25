const body = document.body;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.style.background = '#acacac';

let drawingMode = false;
let color = 'black';
const clickHandler = (e) => {
  // console.log(e);
  console.log(color);
  // clientX, clientY 는 브라우저 화면의 좌측 상단을 기준으로 함
  //layerX,layerY 는 해당 캔버스를 기준으로 위치를 잡는다.
  if (!drawingMode) return;
  if (drawingMode) {
    ctx.beginPath();
    ctx.arc(e.layerX, e.layerY, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
  }
};
const downHandler = () => {
  drawingMode = true;
};
const upHandler = () => {
  drawingMode = false;
};

canvas.addEventListener('mousemove', clickHandler);
canvas.addEventListener('mousedown', downHandler);
canvas.addEventListener('mouseup', upHandler);

const red = document.createElement('button');
body.appendChild(red);
red.style.background = 'red';
red.addEventListener('click', () => {
  color = 'red';
  ctx.fillStyle = color;
});
