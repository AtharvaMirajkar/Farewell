/* ---------- SCROLL TO JOURNEY ---------- */
function scrollToJourney() {
  const section = document.getElementById("journey");
  section.scrollIntoView({ behavior: "smooth" });
}

/* ---------- LETTER TOGGLE ---------- */
function toggleLetter(id) {
  const letter = document.getElementById(id);

  if (letter.classList.contains("hidden")) {
    letter.classList.remove("hidden");
    letter.style.opacity = 0;
    setTimeout(() => {
      letter.style.opacity = 1;
    }, 50);
  } else {
    letter.classList.add("hidden");
  }
}

/* ---------- FADE-IN ON SCROLL ---------- */
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => {
  observer.observe(section);
});
