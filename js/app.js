let mouseCursor = document.querySelector(".cursor");
var cX = document.getElementById("ix");
var cY = document.getElementById("iy");
mouse = [];

// window.addEventListener('mousemove',updateMe);
window.addEventListener("mousemove", cursor);
function cursor(e) {
  mouse.push({ x: e.x, y: e.y });
  mouseCursor.style.top = e.y + "px";
  mouseCursor.style.left = e.x + "px";
  cX.value = e.x;
  cY.value = e.y;
}