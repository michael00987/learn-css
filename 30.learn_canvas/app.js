const body = document.body;

const toRadian = (angle) => {
  return (Math.PI / 180) * angle;
};

/** 6번 캔버스 */

const canvas6 = document.createElement('canvas');
const context6 = canvas6.getContext('2d');
canvas6.className = 'canvas3';
canvas6.width = 600;
canvas6.height = 600;
canvas6.style.background = '#acacac';
body.appendChild(canvas6);

let xPos = 10;
let count = 0;
let timerId = 0;
function draw() {
  count++;
  if (count % 10 === 0) {
    // 조건으로 인터벌을 걸수도 있고 인터벌 메서드로 걸수도 있다.
    context6.clearRect(0, 0, canvas6.width, canvas6.height);
    context6.beginPath();
    context6.arc(xPos, 150, 15, 0, toRadian(360), false);
    context6.fill();
    xPos += 30;
    // if (xPos >= canvas6.width) {
    //   xPos *= -0.1;
    // }
  } // 조건문
  timerId = requestAnimationFrame(draw); // 안에서 실행사면 재귀적으로 실행된다. 프래임은 1/60초 를 목표로 한다. 기기 성능 등의 이유로 보장할수 있는 것은 아니다.
  if (xPos >= canvas6.width) {
    cancelAnimationFrame(timerId);
  }
}
requestAnimationFrame(draw); // 밖에 실행하면 한번만 실행된다.

draw();

canvas6.addEventListener('click', () => {
  // 캔버스에 이벤트를 걸어서 클릭할대 멈추게 할수도 있다.
  cancelAnimationFrame(timerId);
});

/** 5번 캔버스 */

const canvas5 = document.createElement('canvas');
const context5 = canvas5.getContext('2d');
canvas5.className = 'canvas3';
canvas5.width = 600;
canvas5.height = 500;
canvas5.style.background = '#acacac';

context5.beginPath();
context5.arc(100, 100, 50, toRadian(0), toRadian(60), false);
context5.lineTo(100, 100);
context5.lineTo(150, 100); // 피자(부채꼴) 그릴때, 마지막 선은 알아서 연결 하기때문에 마지막 선이 '호' 가 아니라면 마지막 좌표를 넣지 않아도 된다.

context5.stroke();
context5.beginPath();

context5.arc(300, 300, 50, toRadian(0), toRadian(360), true); // 닫지 않고, 패스 시작을 하지 않으면 이러한 문제가 생긴다.
// context5.beginPath(); //만약 이곳에서 시작을 하면 아직 그리지 않았고. "이제 시작이야!!"라고 알리는 것이기 때문에 과거에 그리려고 했던 것은 없어진다.
// 시작을 한다는 것은 과거의 것은 당연히 닫는 것을 의미한다.

context5.fillStyle = 'red';
context5.stroke();

body.appendChild(canvas5);

/** 4번 캔버스 */

const canvas4 = document.createElement('canvas');
const context4 = canvas4.getContext('2d');
canvas4.className = 'canvas3';
canvas4.width = 600;
canvas4.height = 400;
canvas4.style.background = '#acacac';

context4.arc(100, 100, 50, toRadian(0), toRadian(360), true); //(가로, 세로, 반지름, 시작각도:PI, 끝 각도:PI, 방향(시계? 반시계?):bool )  아크로 경로만 찍었을뿐, 아직 그린것은 아니다.
context4.arc(300, 300, 50, toRadian(0), toRadian(360), true); // 닫지 않고, 패스 시작을 하지 않으면 이러한 문제가 생긴다.
// context4.beginPath(); //만약 이곳에서 시작을 하면 아직 그리지 않았고. "이제 시작이야!!"라고 알리는 것이기 때문에 과거에 그리려고 했던 것은 없어진다.
// 시작을 한다는 것은 과거의 것은 당연히 닫는 것을 의미한다.

context4.fillStyle = 'red';
context4.stroke();

body.appendChild(canvas4);

/**3번 캔버스 */
const canvas3 = document.createElement('canvas');
canvas3.className = 'canvas3';
canvas3.width = 600;
canvas3.height = 400;
canvas3.style.background = '#acacac';

const context3 = canvas3.getContext('2d');
context3.fillStyle = 'blue';
context3.beginPath(); //그리기 시작할거다.
context3.moveTo(100, 100); //시작할 위치
context3.lineTo(100, 200); //움직일 경로
context3.lineTo(200, 100); //움직일 경로
context3.lineTo(200, 200); //움직일 경로
context3.fill(); // 만약 시작과 끝을 연결하지 않았다면 자동으로 연결되면서 생기는 영역에 색을 넣는다.
context3.stroke(); // 위에서 시작할 위치랑 움직일 경로를 적용해서 그려라!!
context3.closePath(); // 다 그렸으면 닫는다.
/** 위에서 닫았는데 아래처럼 그릴수도 있다. 문제점은 beginPath()를 하지 않으면 마지막으로 펜이 끝난 위치에서 이어서 그린다.
 * close는 필수는 아니지만 명시적으로 해주는게 좋고, begin은 필수이다. 특별한 이벤트를 위한것이 아니라면 꼭하자!!
 */
context3.fillStyle = 'red';
context3.lineTo(250, 210);
context3.lineTo(200, 300);
context3.lineTo(150, 320);
context3.stroke();

body.appendChild(canvas3);

/**2번 캔버스 */

const canvas2 = document.createElement('canvas');
canvas2.className = 'canvas2';
// 성능이 중요할때는 캔버스로 사이즈를 정하고 캔버스에 그린다.
// 성능보다는 미려함이 우선이다!! => 캔버스 사이즈를 키우고 css로 사이즈를 잡아준다.
canvas2.width = 600;
canvas2.height = 400;
const context2 = canvas2.getContext('2d');
// console.log(context2); // 요것을 이용해서 그린다.
/**
  캔버스는 css 와 다르다.
  도화지에 그림을 그린다고 생각해야 한다.
  그림을 그릴때 가장 먼저 해야할 것은
  도화지를 준비(캔버스 엘리먼트를 생성해서 context를 선언 한다. && 검은색 물감??을 찍는다.)
  그린다.
  색을 변경한다
  그린다.(변경된 색이 적용된다.)
  이제부터 그리는 것은 색을 변경하기 전까지는 모두 위에서 변경한 색이 적용된다.
  strok로 선을 그었을 경우, 색을 변경한다고 색이 적용되지는 않는다. 면에만 적용이 됬다.

  css와 차이점
  css는 마지막 속성이 적용된다.
 */
context2.fillStyle = 'blue'; // 기본값은 black 이다.
context2.fillRect(50, 50, 100, 100);
context2.fillStyle = 'red'; // 기본값은 black 이다.
context2.fillRect(0, 0, 100, 100); // (x,y,가로,세로) (0,0)은 좌측 상단을 의미함(default)
context2.clearRect(80, 80, 50, 50); // 지우개
context2.strokeRect(160, 160, 100, 100); // 선만 그린다. (x,y,가로,세로) x,y 위치에 가로 세로 사이즈의 선을 긋는다.

body.appendChild(canvas2);
/**1번 캔버스 */

// 딱히 그린건 없고, 캔버스 지원 브라우저가 맞는지 아닌지 판별하는 방법
// 모더나이저 같은거 사용 안하려면 캔버스 속성이 존재하는지 봐도 된다.
const canvas1 = document.createElement('canvas');
canvas1.innerHTML = '이 브라우저는 캠버스를 지원하지 않습니다.';
body.appendChild(canvas1);

if (Modernizr.canvas1) {
  console.log(Modernizr);
  console.log('Canvas를 지원하는 브라우저 입니다.');
}
if (canvas1.getContext) {
  console.log('캔버스 사용');
} else {
  console.log('캔버스 불가');
}
