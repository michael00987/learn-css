const body = document.body;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// const imgElem = document.createElement('img');
const imgElem = new Image(); // 위와 동일하다 아무거나 써도 된다.
imgElem.src = '../lake.jpg';
imgElem.addEventListener('load', () => {
  // 캔버스에 그리려면 외부 데이터 이기 때문에 불러올 시간을 주고 불러 왔다면 그때 실행될 함수 정의
  ctx.drawImage(imgElem, 5, 5); // 이미지 를 원본 사이즈 그대로 시작 위치만 잡아줌
  ctx.drawImage(imgElem, 0, 0, 10, 10); // 이미지의 시작 위치와 그림의 사이즈를 정함
  ctx.drawImage(imgElem, 100, 100, 200, 200, 0, 500, 100, 100); // (소스, 소스 시작 X좌표, 소스시작 Y좌표, 소스의 필요한 가로 길이, 소스의 필요한 세로 길이, 가져온 소스를 위치할 X 좌표, 가져온 소스를 위치할 Y 좌표, 그려야할 사이즈 가로길이, 그려야할 사이즈 세로길이 )
});
