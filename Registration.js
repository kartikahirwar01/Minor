document.getElementById('otpBtn').addEventListener('click', function() {
    document.querySelector('.card').classList.add('flip');
  });
  
  document.getElementById('backBtn').addEventListener('click', function() {
    document.querySelector('.card').classList.remove('flip');
  });
  
  // Add Google Sign-In logic here (if required)
  