// Function to generate a random number between min and max
function randomPosition(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create a light element and append it to the sky
function createStar() {
  var star = document.createElement('div');
  star.classList.add('light', 'star');
  star.style.top = randomPosition(0, window.innerHeight - 8) + 'px';
  star.style.left = randomPosition(0, window.innerWidth - 8) + 'px';
  document.getElementById('sky').appendChild(star);
}

// Create multiple stars
for (var i = 0; i < 100; i++) {
  createStar();
}

// Create moon
var moon = document.createElement('div');
moon.classList.add('moon');
document.getElementById('sky').appendChild(moon);

// Function to toggle all stars on
function turnOnAllStars() {
  var stars = document.querySelectorAll('.light');
  stars.forEach(function(star) {
    star.classList.add('on');
  });
  moon.style.opacity = '1';
}

// Function to toggle all stars off
function turnOffAllStars() {
  var stars = document.querySelectorAll('.light');
  stars.forEach(function(star) {
    star.classList.remove('on');
  });
  moon.style.opacity = '0';
}

// Add change event listener to the toggle switch
document.getElementById('toggleAll').addEventListener('change', function() {
  var label = document.getElementById('toggleLabel');
  if (this.checked) {
    turnOnAllStars();
    label.innerText = 'Turn Off All Stars';
  } else {
    turnOffAllStars();
    label.innerText = 'Turn On All Stars';
  }
});
