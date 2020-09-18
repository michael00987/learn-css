const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

const btnsElem = document.querySelector('.btns');

let imageData;
const particles = [];
let paricle;
let colorValue;
let leng;

const render = () => {
  ctx.drawImage(videoElem, 0, 0, 600, 400);
  imageData = ctx.getImageData(0, 0, 600, 400);
  leng = imageData.data.length / 4;
  for (let i = 0; i < leng; i++) {
    switch (colorValue) {
      case 'red':
        imageData.data[i * 4 + 0] = 255;
        break;
      case 'green':
        imageData.data[i * 4 + 1] = 255;
        break;
      case 'blue':
        imageData.data[i * 4 + 2] = 255;
        break;
    }
  }
  ctx.putImageData(imageData, 0, 0);
  requestAnimationFrame(render);
  btnsElem.addEventListener('click', (e) => {
    colorValue = e.target.getAttribute('data-color');
    // console.dir(e.target.getAttribute('data-color'));
  });
};
const videoElem = document.querySelector('.video');
videoElem.addEventListener('canplaythrough', render);
