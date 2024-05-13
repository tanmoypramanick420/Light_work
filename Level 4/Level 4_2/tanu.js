const lightGrid = document.getElementById('light-grid');

const numLights = 100; // Change this number to adjust the grid size

for (let i = 0; i < numLights; i++) {
  const light = document.createElement('div');
  light.classList.add('light');
  light.addEventListener('click', toggleLight);
  light.addEventListener('mouseenter', handleMouseEnter);
  lightGrid.appendChild(light);
}

// Function to toggle the light on and off
function toggleLight(event) {
  const light = event.target;
  light.classList.toggle('on');
}

// Function to handle mouse enter event
function handleMouseEnter(event) {
  const light = event.target;
  // const isCtrlPressed = event.ctrlKey;

  // if (isCtrlPressed) {
    light.classList.add('on');
  // }
}
function resetLights() {
  const lights = document.querySelectorAll('.light.on');
  lights.forEach(light => {
    light.classList.remove('on');
  });
}