// Function to generate a random number between min and max
function randomPosition(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create multiple instances of stars
// function createStars() {
//   var container = document.querySelector('.container');
//   var numStars = 50; // Number of stars you want

//   for (var i = 0; i < numStars; i++) {
//     // Create star-1
//     var star1 = document.createElement('div');
//     star1.classList.add('star-1');
//     star1.style.top = randomPosition(0, window.innerHeight) + 'px';
//     star1.style.left = randomPosition(0, window.innerWidth) + 'px';
//     container.appendChild(star1);

//     // Create star-2
//     var star2 = document.createElement('div');
//     star2.classList.add('star-2');
//     star2.style.top = randomPosition(0, window.innerHeight) + 'px';
//     star2.style.left = randomPosition(0, window.innerWidth) + 'px';
//     container.appendChild(star2);
//   }
// }

// Create stars when the window loads
// window.onload = function() {
//   createStars();
// };




// Function to create multiple instances of stars
function createStars() {
  var container = document.querySelector('.container');
  var moon = document.querySelector('.moon');
  var numStars = 50; // Number of stars you want

  for (var i = 0; i < numStars; i++) {
    var star1, star2;

    do {
      // Create star-1
      star1 = document.createElement('div');
      star1.classList.add('star-1');
      star1.style.top = randomPosition(0, window.innerHeight) + 'px';
      star1.style.left = randomPosition(0, window.innerWidth) + 'px';

      // Create star-2
      star2 = document.createElement('div');
      star2.classList.add('star-2');
      star2.style.top = randomPosition(0, window.innerHeight) + 'px';
      star2.style.left = randomPosition(0, window.innerWidth) + 'px';
    } while (isTooCloseToMoon(star1, moon) || isTooCloseToMoon(star2, moon));

    container.appendChild(star1);
    container.appendChild(star2);
  }
}

// Function to check if a star is too close to the moon
function isTooCloseToMoon(star, moon) {
  var starRect = star.getBoundingClientRect();
  var moonRect = moon.getBoundingClientRect();

  var distanceX = Math.abs(starRect.x - moonRect.x);
  var distanceY = Math.abs(starRect.y - moonRect.y);

  var minDistance = 100; // Adjust this value as needed

  return distanceX < minDistance && distanceY < minDistance;
}

// Create stars when the window loads
window.onload = function() {
  createStars();
};

  