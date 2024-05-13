const lightGrid = document.getElementById('light-grid');
let timeoutId;

const numLights = 100; // Change this number to adjust the grid size

for (let i = 0; i < numLights; i++) {
  const light = document.createElement('div');
  light.classList.add('light');
  light.addEventListener('click', toggleLight);
  light.addEventListener('mouseenter', handleMouseEnter);
  light.addEventListener('mouseleave', handleMouseLeave);
  lightGrid.appendChild(light);
}

// Function to toggle the light on and off
function toggleLight(event) {
  const light = event.target;
  light.classList.toggle('on');
  clearTimeout(timeoutId); // Clear the previous timeout
  timeoutId = setTimeout(() => {
    light.classList.remove('on');
  }, 4000); // Turn off after 4 seconds
}

// Function to handle mouse enter event
function handleMouseEnter(event) {
  const light = event.target;
  const isCtrlPressed = event.ctrlKey;

  if (isCtrlPressed) {
    light.classList.add('on');
    clearTimeout(timeoutId); // Clear the previous timeout
    timeoutId = setTimeout(() => {
      light.classList.remove('on');
    }, 4000); // Turn off after 4 seconds
  }
}

// Function to handle mouse leave event
function handleMouseLeave(event) {
  const light = event.target;
  clearTimeout(timeoutId); // Clear the previous timeout
  timeoutId = setTimeout(() => {
    light.classList.remove('on');
  }, 4000); // Turn off after 4 seconds
}

function resetLights() {
  const lights = document.querySelectorAll('.light.on');
  lights.forEach(light => {
    light.classList.remove('on');
  });
}