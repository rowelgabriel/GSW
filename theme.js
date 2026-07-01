var theme = "light";
var body = document.getElementById("body");
var navbar = document.getElementById("navbar");
var footer = document.getElementById("footer");
var navLinks = navbar.querySelectorAll(".nav-link");
var themeButtons = document.querySelectorAll(".theme-button");
var cards = document.querySelectorAll(".card");
var statsButtons = document.querySelectorAll("#players .btn");
var navbarBrand = document.querySelector(".navbar-brand");
var homeTitle = document.getElementById("home-title");
var homeButton = document.getElementById("home-btn");

function changeTheme() {
  theme = theme === "light" ? "dark" : "light";
  body.setAttribute("data-bs-theme", theme);

  if (theme === "dark") {
    homeTitle.classList.remove("text-light");
    homeTitle.style.color = "#1a1a1a";
    homeTitle.style.webkitTextStroke = "0.4px #e6e6e6";

    homeButton.style.backgroundColor = "#121212";
    homeButton.style.color = "#e6e6e6";
    homeButton.style.borderColor = "#3a3a3a";

    body.style.backgroundColor = "#1a1a1a";
    body.style.color = "white";

    navbar.classList.remove("bg-light");
    navbar.classList.add("navbar-dark");
    navbar.style.backgroundColor = "#121212";

    footer.classList.remove("bg-light", "text-dark");
    footer.classList.add("text-light");
    footer.style.backgroundColor = "#121212";

    navLinks.forEach(link => link.classList.remove("text-dark"));
    navLinks.forEach(link => link.classList.add("text-light"));

    navbarBrand.classList.remove("text-dark");
    navbarBrand.classList.add("text-light");

    cards.forEach(card => {
      card.style.backgroundColor = "#151515";
      card.style.color = "white";
      card.style.borderColor = "#2a2a2a";
    });

    statsButtons.forEach(btn => {
      btn.style.backgroundColor = "#2a2a2a";
      btn.style.color = "#e6e6e6";
      btn.style.borderColor = "#3a3a3a";
    });

    themeButtons.forEach(btn => {
      btn.classList.remove("btn-outline-dark");
      btn.classList.add("btn-outline-light");
      btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    });

  } else {
    homeTitle.classList.add("text-light");
    homeTitle.style.color = "";
    homeTitle.style.webkitTextStroke = "";

    homeButton.style.backgroundColor = "";
    homeButton.style.color = "";
    homeButton.style.borderColor = "";

    body.style.backgroundColor = "white";
    body.style.color = "black";

    navbar.classList.remove("bg-dark", "navbar-dark");
    navbar.classList.add("bg-light");

    footer.classList.remove("bg-dark", "text-light");
    footer.classList.add("bg-light", "text-dark");

    navLinks.forEach(link => link.classList.remove("text-light"));
    navLinks.forEach(link => link.classList.add("text-dark"));

    navbarBrand.classList.remove("text-light");
    navbarBrand.classList.add("text-dark");

    cards.forEach(card => {
      card.style.backgroundColor = "white";
      card.style.color = "black";
      card.style.borderColor = "#dee2e6";
    });

    statsButtons.forEach(btn => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
      btn.style.borderColor = "";
    });

    themeButtons.forEach(btn => {
      btn.classList.remove("btn-outline-light");
      btn.classList.add("btn-outline-dark");
      btn.innerHTML = '<i class="bi bi-moon-fill"></i>';
    });
  }
}