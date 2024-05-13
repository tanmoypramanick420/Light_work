// Function to generate a random number between min and max
function randomPosition(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create a light element and append it to the body
function createLight() {
  var light = document.createElement('div');
  light.classList.add('light');
  light.style.top = randomPosition(0, window.innerHeight - 10) + 'px';
  light.style.left = randomPosition(0, window.innerWidth - 10) + 'px';
  document.body.appendChild(light);
}

// Create fewer lights to avoid overlapping
for (var i = 0; i < 200; i++) {
  createLight();
}

// Function to toggle all lights on and off
function toggleAllLights() {
  var lights = document.querySelectorAll('.light');
  var toggleSwitch = document.getElementById('toggle-switch');
  var toggleState = toggleSwitch.classList.contains('on');
  
  lights.forEach(function(light) {
    if (toggleState) {
      light.classList.remove('on');
    } else {
      light.classList.add('on');
    }
  });
  
  toggleSwitch.classList.toggle('on');
}
