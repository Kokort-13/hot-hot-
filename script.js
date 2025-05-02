function showIceCream() {
    const firstScreen = document.getElementById('firstScreen');
    const secondScreen = document.getElementById('secondScreen');
    
    // Fade out first screen
    firstScreen.style.opacity = '0';
    
    // After fade-out completes, switch screens
    setTimeout(() => {
      firstScreen.classList.add('hidden');
      secondScreen.classList.remove('hidden');
      // Fade in second screen
      setTimeout(() => secondScreen.style.opacity = '1', 50);
    }, 500); // Matches the transition time
  }