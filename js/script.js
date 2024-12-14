function toggleBox(event, element) {
  // Stop the toggle if a dropdown is clicked
  if (event.target.tagName === 'SELECT') {
    return;
  }

  // Close all other boxes
  const allBoxes = document.querySelectorAll('.box');
  allBoxes.forEach(box => {
    const options = box.querySelector('.options');
    if (options && box !== element) {
      options.style.display = 'none';
    }
  });

  const options = element.querySelector('.options');
  if (options) {
    //box is already open close else open 
    options.style.display = (options.style.display === 'none' || options.style.display === '') ? 'block' : 'none';
  }
}
