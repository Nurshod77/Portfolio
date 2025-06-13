

typingEffect();

// Hover Effect for Skills Section
const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.1)';
    skill.style.transition = 'transform 0.3s ease-in-out';
  });
  
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
  });
});

// Scroll Animation for the "Haqimda" and "Portfolio" sections
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > aboutSection.offsetTop - 400) {
    aboutSection.classList.add('fade-in');
  }

  if (scrollPosition > portfolioSection.offsetTop - 400) {
    portfolioSection.classList.add('fade-in');
  }
});


window.addEventListener('scroll', function() {
  // Agar sahifaning ma'lum nuqtasiga yetilsa
  if (window.scrollY > 900) {
    document.getElementById('block1').style.transform = 'translateX(100px)';
  }
});


