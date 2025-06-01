// Hero Section Animation Script
document.addEventListener('DOMContentLoaded', function() {
  // Create floating particles
  createParticles();
  
  // Add typewriter effect
  const heroTitle = document.querySelector('.hero-content h1');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    // Only apply typewriter if not on mobile (optional)
    if (window.innerWidth > 768) {
      applyTypewriterEffect(heroTitle, originalText);
    } else {
      // On mobile, just add the glow class
      heroTitle.classList.add('glow-text');
    }
  }
  
  // Add scroll-down indicator with smooth scrolling
  addScrollIndicator();
});

// Create floating particles in the background
function createParticles() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;
  
  // Create particles container if it doesn't exist
  let particlesContainer = document.querySelector('.particles-container');
  if (!particlesContainer) {
    particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    heroSection.appendChild(particlesContainer);
  }
  
  // Create background pattern element
  const bgPattern = document.createElement('div');
  bgPattern.className = 'hero-bg-pattern';
  heroSection.appendChild(bgPattern);
  
  // Add floating particles
  const numberOfParticles = 20;
  
  for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 5px and 15px
    const size = Math.floor(Math.random() * 10) + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    const posX = Math.floor(Math.random() * 100);
    const posY = Math.floor(Math.random() * 100);
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    
    // Random animation duration
    const duration = Math.floor(Math.random() * 10) + 10;
    particle.style.animationDuration = `${duration}s`;
    
    // Random delay
    const delay = Math.floor(Math.random() * 5);
    particle.style.animationDelay = `${delay}s`;
    
    // Random opacity
    const opacity = (Math.random() * 0.3) + 0.1;
    particle.style.opacity = opacity;
    
    particlesContainer.appendChild(particle);
  }
}

// Apply typewriter effect to the hero title
function applyTypewriterEffect(element, text) {
  element.textContent = '';
  element.style.opacity = 1;
  
  let index = 0;
  const speed = 70; // Typing speed in ms
  
  function typeCharacter() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeCharacter, speed);
    } else {
      // Add glow effect after typing is complete
      element.classList.add('glow-text');
    }
  }
  
  // Start typing after a short delay
  setTimeout(typeCharacter, 500);
}

document.addEventListener("DOMContentLoaded",function(){
  var navLinks= documnet.querySelectorAll('.navbar-nav .nav-link');
  var navbarCollapse=document.querySelector('.navbar-collapse');
  navLinks.forEach(function(link){
    link.addEventListener('click',function(){
      if(navbarCollapse.classList.contains('show')){
        var bsCollapse = new bootstrap.Collapse(navbarCollapse ,{toggle:false});
        bsCollapse.hide();
      }
    });
  });
});
