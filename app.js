const imgGallery = document.getElementById("imgGallery"); // Proveri da li se ovo slaže sa ID-om u HTML-u
const images = ["number_1.png", "number_two.png"];

images.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Gallery Image";
  imgGallery.appendChild(img);

  img.addEventListener("click", () => openModal(src));
});

const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `
  <span class="close">&times;</span>
  <img src="" alt="Modal Image" />
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector("img");
const closeModal = modal.querySelector(".close");

function openModal(src) {
  modalImg.src = src;
  modal.style.display = "flex";
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const isVisible = answer.style.display === "block";

      // Sakrij sve odgovore
      document.querySelectorAll(".faq-answer").forEach((a) => {
        a.style.display = "none";
      });

      // Ako odgovor nije već vidljiv, prikaži ga
      if (!isVisible) {
        answer.style.display = "block";
      }
    });
  });
});
document.getElementById("theme-toggle").addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
});

document.getElementById("font-size-toggle").addEventListener("click", () => {
  const currentFontSize =
    document.documentElement.getAttribute("data-font-size");
  const newFontSize = currentFontSize === "small" ? "large" : "small";
  document.documentElement.setAttribute("data-font-size", newFontSize);
});
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      // Toggle the display of the content
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const strengthIndicator = document.getElementById("strength-indicator");
  const form = document.getElementById("contact-form");

  // Password strength validation
  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const strength = getPasswordStrength(password);
    strengthIndicator.textContent = strength;
    strengthIndicator.style.color = getStrengthColor(strength);
  });

  // Form validation
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      alert("Please fill out all required fields correctly.");
    }
  });

  // Password strength calculation
  function getPasswordStrength(password) {
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /\d/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);

    if (
      lengthCriteria &&
      numberCriteria &&
      lowercaseCriteria &&
      uppercaseCriteria
    ) {
      return "Strong";
    } else if (
      lengthCriteria &&
      (numberCriteria || lowercaseCriteria || uppercaseCriteria)
    ) {
      return "Medium";
    } else {
      return "Weak";
    }
  }

  // Determine color based on strength
  function getStrengthColor(strength) {
    switch (strength) {
      case "Strong":
        return "green";
      case "Medium":
        return "orange";
      default:
        return "red";
    }
  }
});
