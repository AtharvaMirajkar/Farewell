/* ---------------- SCROLL TO JOURNEY ---------------- */
function scrollToJourney() {
  const journeySection = document.getElementById("journey");
  if (journeySection) {
    journeySection.scrollIntoView({ behavior: "smooth" });
  }
}

/* ---------------- LETTER TOGGLE ---------------- */
function toggleLetter(letterId) {
  const letter = document.getElementById(letterId);

  if (!letter) return;

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

/* ---------------- FADE-IN ON SCROLL ---------------- */
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

/* ---------------- OPTIONAL: SMOOTH PAGE LOAD ---------------- */
window.addEventListener("load", () => {
  document.body.style.opacity = 1;
});
