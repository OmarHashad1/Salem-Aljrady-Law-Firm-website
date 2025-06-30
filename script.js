function animateCounters() {
  const counters = document.querySelectorAll(".number");
  const speed = 200;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(counter);
  });
}
document.addEventListener("DOMContentLoaded", animateCounters);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

let sections = document.querySelectorAll(".scroll");
let navLinks = document.querySelectorAll(".header .nav-links a");

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navigation-bar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        
      });
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const fields = form.querySelectorAll(".field");

  form.addEventListener("submit", function (e) {
    let isValid = true;

    fields.forEach(field => {
      const input = field.querySelector(".item");
      const error = field.querySelector(".error-txt");

      if (!input.value.trim()) {
        field.classList.add("error");
        isValid = false;
      } else {
        field.classList.remove("error");
      }
    });

    if (!isValid) {
      e.preventDefault(); // Prevent sending the form
    }
  });
});