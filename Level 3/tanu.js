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
