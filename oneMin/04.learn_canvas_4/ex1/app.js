// 캔버스에서 비디오를 사용하는 이유?
/**
 * 비디오의 색상을 변경할수다.
 * 비디오를 잘게 쪼개서 뒤섞을수 있다.
 */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let canPlayState = false;

ctx.textAlign = 'center';
ctx.fillText('비디오 로딩 중 ...', 300, 200);

// draw이미지로 넣을수 있는 것이 3가지가 있다.
// 1. 이미지
// 2. 비디오
// 3. 다른 캔버스
const render = () => {
  ctx.drawImage(videoElem, 0, 0, 600, 400);
  requestAnimationFrame(render);
};

const videoElem = document.querySelector('.video');
videoElem.addEventListener('canplaythrough', render);
