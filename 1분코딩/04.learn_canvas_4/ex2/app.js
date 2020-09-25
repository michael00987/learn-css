const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.font = 'bold 50px serif';
ctx.fillStyle = 'white';

const messages = [
  {time: 1, message: '1 ㅋㅋ', x: 100, y: 100},
  {time: 3, message: '2 ㅎㅎ', x: 300, y: 300},
  {time: 5, message: '3 ㅉㅉ', x: 400, y: 200},
];

const render = () => {
  ctx.drawImage(videoElem, 0, 0, 600, 400);
  for (let i = 0; i < messages.length; i++) {
    if (videoElem.currentTime > messages[i].time) {
      ctx.fillText(messages[i].message, messages[i].x, messages[i].y);
    }
  }
  requestAnimationFrame(render);
};

const videoElem = document.querySelector('.video');
videoElem.addEventListener('canplaythrough', render);
