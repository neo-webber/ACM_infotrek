// create stars 
function createStars() {
    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');
    document.body.appendChild(starContainer);

    for (let i = 0; i < 100; i++) { // Number of stars
        let star = document.createElement('span');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDuration = (Math.random() * 3 + 2) + "s";
        starContainer.appendChild(star);
    }
}
createStars();

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100; 

        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);


const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

 
    if (navLinks.classList.contains('active')) {
        menuToggle.innerHTML = '<i class="fa fa-times"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("cash-counter");
  let target = 20000;
  let started = false;


  const startCounter = () => {
    let current = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      current = Math.floor(progress * target);
      counter.textContent = current.toLocaleString("en-IN");

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        startCounter();
        started = true; 
      }
    });
  }, { threshold: 0.5 }); 

  
  const section = document.querySelector(".cashprize-section");
  observer.observe(section);
});


