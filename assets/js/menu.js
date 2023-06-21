window.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('footer');
    var wrapper = document.querySelector('.wrapper-music');
    
    function adjustFooterPosition() {
      var wrapperHeight = wrapper.offsetHeight;
      var windowHeight = window.innerHeight;
      var scrollPosition = window.scrollY || window.pageYOffset;
  
      if (wrapperHeight < windowHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.left = '0';
      } else {
        if (scrollPosition + windowHeight >= wrapperHeight) {
          footer.style.position = 'static';
        } else {
          footer.style.position = 'sticky';
        }
      }
    }
  
    adjustFooterPosition();
  
    window.addEventListener('scroll', adjustFooterPosition);
    window.addEventListener('resize', adjustFooterPosition);
  });
  