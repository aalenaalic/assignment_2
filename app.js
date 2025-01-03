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

      document.querySelectorAll(".faq-answer").forEach((a) => {
        a.style.display = "none";
      });

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

  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const strength = getPasswordStrength(password);
    strengthIndicator.textContent = strength;
    strengthIndicator.style.color = getStrengthColor(strength);
  });

  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      alert("Please fill out all required fields correctly.");
    }
  });

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
$(document).ready(function () {
  $.getJSON("content.json", function (data) {
    const blogPosts = data.blogPosts;
    const container = $("#blogPostsContainer");

    blogPosts.forEach(function (post) {
      const postElement = `
        <div class="blog-post">
          <h3>${post.title}</h3>
          <p><strong>By ${post.author}</strong> on ${post.date}</p>
          <p>${post.content}</p>
        </div>
      `;
      container.append(postElement);
    });
  });
});
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch("your-server-endpoint", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Form submitted successfully!");
      } else {
        alert("Error: " + data.error);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/your-server-endpoint", (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
toastr.success("Your action was successful!");

toastr.error("An error occurred.");
document.getElementById("viewMoreBtn").addEventListener("click", function () {
  window.open("details.html", "_blank");
});
document.querySelectorAll(".editBtn").forEach((button) => {
  button.addEventListener("click", function () {
    const row = this.closest("tr");
    row.cells[0].textContent = "Edited Item";
    toastr.success("Item edited successfully.");
  });
});

document.querySelectorAll(".deleteBtn").forEach((button) => {
  button.addEventListener("click", function () {
    const row = this.closest("tr");
    row.remove();
    toastr.success("Item deleted successfully.");
  });
});
const apiKey = "your-api-key";
const city = "Amsterdam";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const weatherInfo = `Temperature: ${data.main.temp}°C, Weather: ${data.weather[0].description}`;
    document.getElementById("weatherInfo").textContent = weatherInfo;
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
    document.getElementById("weatherInfo").textContent =
      "Failed to load weather data.";
  });
document.addEventListener("DOMContentLoaded", function () {
  // Handle Edit button
  document.querySelectorAll(".editBtn").forEach((button) => {
    button.addEventListener("click", function () {
      const row = button.closest("tr");
      const itemCell = row.querySelector("td:first-child");
      const newItem = prompt("Edit item:", itemCell.textContent);
      if (newItem !== null) {
        itemCell.textContent = newItem;
      }
    });
  });

  // Handle Delete button
  document.querySelectorAll(".deleteBtn").forEach((button) => {
    button.addEventListener("click", function () {
      const row = button.closest("tr");
      if (confirm("Are you sure you want to delete this item?")) {
        row.remove();
      }
    });
  });
});
