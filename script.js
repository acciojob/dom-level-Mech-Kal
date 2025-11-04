//your JS code here. If required.
// Get the element with id "level"
const element = document.getElementById('level');

let level = 0;
let current = element;

// Traverse up the DOM tree until there are no more parents
while (current) {
  level++;
  current = current.parentElement;
}

// Display the result
alert(`The level of the element is: ${level}`);
