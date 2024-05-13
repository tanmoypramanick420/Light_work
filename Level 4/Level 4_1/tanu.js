const lightGrid = document.getElementById('light-grid');

const numLights = 80; // Change this number to adjust the grid size

for (let i = 0; i < numLights; i++) {
  const light = document.createElement('div');
  light.classList.add('light');
  light.addEventListener('click', toggleLight);
  light.addEventListener('mouseenter', turnOnLight);
  light.addEventListener('mouseleave', turnOffLight);
  lightGrid.appendChild(light);
}

function toggleLight(event) {
  const light = event.target;
  light.classList.toggle('on');
}

function turnOnLight(event) {
  const light = event.target;
  light.classList.add('on');
}

function turnOffLight(event) {
  const light = event.target;
  light.classList.remove('on');
}

function resetLights() {
  const lights = document.querySelectorAll('.light.on');
  lights.forEach(light => {
    light.classList.remove('on');
  });
}
