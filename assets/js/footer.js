window.addEventListener('DOMContentLoaded', function() {

  const footer = document.getElementById('footer');
  const bodyHeight = document.body.scrollHeight;
  const viewportHeight = window.innerHeight;
  const hasScrollableContent = bodyHeight > viewportHeight;

  // If there is scrollable content
  if (hasScrollableContent) {
    window.addEventListener('scroll', toggleFooterVisibility);
  } else {
    // If there is no scrollable content, make the footer visible
    footer.classList.add('visible');
  }

  // Function to toggle footer visibility
  function toggleFooterVisibility() {
    // Get the current scroll position
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    // Calculate the maximum scroll height
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Check if the user has scrolled to the bottom
    const isAtBottom = scrollTop >= scrollHeight;

    // If the user is at the bottom, make the footer visible
    if (isAtBottom) {
      footer.classList.add('visible');
    } else {
      // If the user is not at the bottom, hide the footer
      footer.classList.remove('visible');
    }
  }
});
