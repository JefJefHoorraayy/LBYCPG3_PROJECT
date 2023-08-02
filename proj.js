// Used to include both header and footer html files - reduce redundancy of code
function includeHTML(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(content => {
      document.getElementById(elementId).innerHTML = content;
    });
}

// Include the header
includeHTML('header.html', 'header');

// Include the footer
includeHTML('footer.html', 'footer');

// Get all the button elements and their respective dropdown symbols
const buttons = document.querySelectorAll('.custom-dropdown-btn');

// Add a click event listener to each button
buttons.forEach((button) => {
  const dropdownSymbol = button.querySelector('.dropdown-symbol');
  let rotated = false;

  button.addEventListener('click', () => {
    // Toggle the rotated flag for the specific button
    rotated = !rotated;

    // Apply the appropriate rotation class based on the rotated flag
    if (rotated) {
      dropdownSymbol.classList.add('rotated');
    } else {
      dropdownSymbol.classList.remove('rotated');
    }
  });
});
