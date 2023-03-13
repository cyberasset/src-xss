// Define a function to be executed when the window loads
function showAlert() {
  alert("Hello, this is a XSS Code!");
}

// Add an event listener for the window's "load" event
window.addEventListener('load', showAlert);
