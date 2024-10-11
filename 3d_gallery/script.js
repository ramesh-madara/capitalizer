const cube = document.querySelector(".cube");
let isMouseDown = false;
let mouseX = 0;
let mouseY = 0;
let rotationX = 0;
let rotationY = 0;

// Function to handle rotation
function handleRotation(event) {
  const deltaX =
    event.clientX !== undefined
      ? event.clientX - mouseX
      : event.touches[0].clientX - mouseX;
  const deltaY =
    event.clientY !== undefined
      ? event.clientY - mouseY
      : event.touches[0].clientY - mouseY;

  rotationY += deltaX * 0.5; // Adjust the sensitivity
  rotationX -= deltaY * 0.5; // Adjust the sensitivity

  // Set limits to prevent flipping
  rotationX = Math.max(-90, Math.min(90, rotationX));

  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

  mouseX =
    event.clientX !== undefined ? event.clientX : event.touches[0].clientX;
  mouseY =
    event.clientY !== undefined ? event.clientY : event.touches[0].clientY;
}

// Mouse events
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
    handleRotation(event);
  }
});

// Touch events for mobile
document.addEventListener("touchstart", (event) => {
  isMouseDown = true;
  mouseX = event.touches[0].clientX;
  mouseY = event.touches[0].clientY;
});

document.addEventListener("touchend", () => {
  isMouseDown = false;
});

document.addEventListener("touchmove", (event) => {
  if (isMouseDown) {
    handleRotation(event);
  }
});
