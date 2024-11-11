// Adding some interactivity to the services for when they are clicked
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
  
    item.addEventListener('click', () => {
      alert('You clicked on ' + item.querySelector('h2').textContent + ' service.');
    });
  });
  

  // spy scroll
  