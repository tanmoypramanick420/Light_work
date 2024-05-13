const lightGrid = document.getElementById('light-grid');

const numLights = 171; // Change this number to adjust the grid size

for (let i = 0; i < numLights; i++) {
  const light = document.createElement('div');
  light.classList.add('light');
  light.addEventListener('click', toggleLight);
  lightGrid.appendChild(light);
}

function toggleLight(event) {
  const light = event.target;
  light.classList.toggle('on');
}

function resetLights() {
  const lights = document.querySelectorAll('.light.on');
  lights.forEach(light => {
    light.classList.remove('on');
  });
}

