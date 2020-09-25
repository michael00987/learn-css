const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

ctx.fillRect(100, 100, 200, 200);
ctx.fillStyle = 'orange';
ctx.fillRect(150, 150, 200, 200);
ctx.save();
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(300, 300, 50, 0, Math.PI * 2, false);
ctx.fill();

ctx.restore();
ctx.beginPath();
ctx.arc(300, 300, 20, 0, Math.PI * 2, false);
ctx.fill();
