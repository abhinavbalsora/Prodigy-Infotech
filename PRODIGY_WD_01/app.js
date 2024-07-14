document.addEventListener('DOMContentLoaded', function () {
    var navigation = document.getElementById('navigation');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navigation.style.background = '#96a88c'; // Change background color when scrolled
      } else {
        navigation.style.background = 'transparent'; // Reset background color
      }
    });
  });
  
 
