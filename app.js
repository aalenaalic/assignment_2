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
