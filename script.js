// القائمة الجانبية
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

// تأثير ظهور البطاقات عند التمرير
const cards = document.querySelectorAll('.card');

function showCardsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', showCardsOnScroll);
window.addEventListener('load', showCardsOnScroll);


let slider = document.getElementById("slider");
let slides = slider.children;
let totalSlides = slides.length;
let index = 0;

let dotsContainer = document.getElementById("dots");
for (let i = 0; i < totalSlides; i++) {
    let dot = document.createElement("span");
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }
  updateDots();
  // إنشاء النقاط تلقائيًا

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function goToSlide(i) {
    index = i;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(${-index * 100}%)`;
    updateDots();
}

function updateDots() {
    let dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[index].classList.add("active");
}

// التشغيل التلقائي
setInterval(nextSlide, 3500);


