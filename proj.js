// Used to include both header and footer html files - reduce redundancy of code
function includeHTML(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(content => {
      document.getElementById(elementId).innerHTML = content;
      document.getElementById(elementId).classList.add('show');

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
            dropdownSymbol.classList.remove('rotated-back');
          } else {
            dropdownSymbol.classList.add('rotated-back');
            dropdownSymbol.classList.remove('rotated');
          }
        });
      });
    });
}

// Include the header
includeHTML('templates/header.html', 'header');
// Include the footer
includeHTML('templates/footer.html', 'footer');


function updateContent() {
  var contentDisplay = document.getElementById("contentDisplay");
  var radio1 = document.getElementById("btnradio1");
  var radio2 = document.getElementById("btnradio2");

  if (radio1.checked) {
    contentDisplay.classList.remove('show');
    includeHTML('CMECE_copy.html', 'contentDisplay');
  } else if (radio2.checked) {
    contentDisplay.classList.remove('show');
    includeHTML('CMCPE_copy.html', 'contentDisplay');
  }
}

// Call the function once on page load to initialize the content
updateContent();

// Attach the function to the change event of the radio buttons
document.querySelectorAll('input[name="btnradio"]').forEach(function(radio) {
  radio.addEventListener('change', updateContent);
});
