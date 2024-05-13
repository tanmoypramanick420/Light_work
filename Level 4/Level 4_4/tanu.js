const lightGrid = document.getElementById('light-grid');

const numLights = 500; // Change this number to adjust the grid size

for (let i = 0; i < numLights; i++) {
  const light = document.createElement('div');
  light.classList.add('light');
  light.addEventListener('mouseenter', handleMouseEnter);
  lightGrid.appendChild(light);
}

function handleMouseEnter(event) {
  const light = event.target;
  const isCtrlPressed = event.ctrlKey;

  if (isCtrlPressed) {
    light.classList.add('on');
    setTimeout(() => {
      light.classList.remove('on');
    }, 4000); // Turn off after 4 seconds
  }
}


function resetLights() {
  const lights = document.querySelectorAll('.light.on');
  lights.forEach(light => {
    light.classList.remove('on');
  });
}