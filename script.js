// ===============================
// 1. Side Navbar Toggle
// ===============================
function shownavbar() {
  document.querySelector(".side-navbar").style.left = "0";
}

function closenavbar() {
  document.querySelector(".side-navbar").style.left = "-100%";
}

// ===============================
// 2. Theme Toggle
// ===============================


function toggleTheme() {
  document.body.classList.toggle("dark-theme");

  const moon = document.querySelector(".show-on-light");
  const sun = document.querySelector(".show-on-dark");

  if (document.body.classList.contains("dark-theme")) {
    moon.style.display = "none";
    sun.style.display = "inline";
  } else {
    moon.style.display = "inline";
    sun.style.display = "none";
  }
}




// ===============================
// 3. Search Functionality
// ===============================
const searchInput = document.getElementById("search-input");
const searchIcon = document.getElementById("search-icon");

function searchProducts() {
  const value = searchInput.value.trim().toLowerCase();
  const products = document.querySelectorAll(".new-arrivals-container");
  let anyVisible = false;

  products.forEach(product => {
    const name = product.querySelector("h4")?.textContent.toLowerCase() || "";
    const match = name.includes(value);
    product.style.display = match ? "block" : "none";
    if (match) anyVisible = true;
  });

  // Toggle the search icon visibility
  searchIcon.style.display = value === "" ? "inline-block" : "none";

  // Optional: If you want a "no results" message
  const noResults = document.getElementById("no-results");
  if (noResults) {
    noResults.style.display = anyVisible ? "none" : "block";
  }
}


// ===============================
// 4. Header Gallery with Indicators
// ===============================
const gallery = document.querySelector('.header-gallery');
const indicatorsContainer = document.querySelector('.gallery-indicators');
const images = document.querySelectorAll('.header-img');

function scrollGallery(amount) {
  gallery.scrollBy({
    left: amount,
    behavior: 'smooth'
  });
}

// Function to scroll the gallery
function scrollGallery(amount) {
  const gallery = document.querySelector('.header-gallery');
  gallery.scrollLeft += amount;  // Scroll the gallery by the specified amount
}

// Autoplay functionality for the gallery
let autoplayInterval = setInterval(() => {
  scrollGallery(300);  // Scroll right every 3 seconds
}, 3000);

// Toggle dark mode
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

// ===============================
// 5. Pagination Functionality
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const totalPages = 3; // Change based on your total pages
  const currentPage = parseInt(location.pathname.match(/page(\d+)\.html/)?.[1]) || 1;
  const pagination = document.getElementById('pagination');

  pagination.innerHTML = "";

  // Left Arrow
  pagination.innerHTML += currentPage > 1
    ? `<a href="page${currentPage - 1}.html"><i class="fa-solid fa-arrow-left"></i></a>`
    : `<span class="disabled"><i class="fa-solid fa-arrow-left"></i></span>`;

  // Page Numbers
  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `<a href="page${i}.html" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
  }

  // Right Arrow
  pagination.innerHTML += currentPage < totalPages
    ? `<a href="page${currentPage + 1}.html"><i class="fa-solid fa-arrow-right"></i></a>`
    : `<span class="disabled"><i class="fa-solid fa-arrow-right"></i></span>`;
});
