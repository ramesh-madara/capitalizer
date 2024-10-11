const cube = document.querySelector(".cube");
let isMouseDown = false;
let mouseX = 0;
let mouseY = 0;
let rotationX = 0;
let rotationY = 0;

document.addEventListener("mousedown", (event) => {
  isMouseDown = true;
  mouseX = event.clientX;
  mouseY = event.clientY;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

document.addEventListener("mousemove", (event) => {
  if (isMouseDown) {
    const deltaX = event.clientX - mouseX;
    const deltaY = event.clientY - mouseY;

    rotationY += deltaX * 0.5; // Adjust the sensitivity
    rotationX -= deltaY * 0.5; // Adjust the sensitivity

    // Set limits to prevent flipping
    rotationX = Math.max(-90, Math.min(90, rotationX));

    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    mouseX = event.clientX;
    mouseY = event.clientY;
  }
});
