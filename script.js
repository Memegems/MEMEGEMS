const canvas = document.getElementById("crownRain");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = 300;

const crownImg = new Image();
crownImg.src = 'images/crown.png';

const crowns = [];
for (let i = 0; i < 50; i++) {
  crowns.push({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    speed: 2 + Math.random() * 3,
    size: 20 + Math.random() * 30
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let crown of crowns) {
    ctx.drawImage(crownImg, crown.x, crown.y, crown.size, crown.size);
    crown.y += crown.speed;
    if (crown.y > canvas.height) crown.y = -crown.size;
  }
  requestAnimationFrame(animate);
}

crownImg.onload = animate;