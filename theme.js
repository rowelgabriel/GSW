var theme = "light";
var body = document.getElementById("body");
var navbar = document.getElementById("navbar");
var footer = document.getElementById("footer");
var navLinks = navbar.querySelectorAll(".nav-link");
var themeButtons = document.querySelectorAll(".theme-button");

function changeTheme() {
  theme = theme === "light" ? "dark" : "light";
  body.setAttribute("data-bs-theme", theme);

  if (theme === "dark") {
    navbar.classList.remove("bg-light");
    navbar.classList.add("bg-dark", "navbar-dark");

    footer.classList.remove("bg-light", "text-dark");
    footer.classList.add("bg-dark", "text-light");

    navLinks.forEach(link => link.classList.remove("text-dark"));
    navLinks.forEach(link => link.classList.add("text-light"));

    themeButtons.forEach(btn => {
      btn.classList.remove("btn-outline-dark");
      btn.classList.add("btn-outline-light");
      btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    });

  } else {
    navbar.classList.remove("bg-dark", "navbar-dark");
    navbar.classList.add("bg-light");

    footer.classList.remove("bg-dark", "text-light");
    footer.classList.add("bg-light", "text-dark");

    navLinks.forEach(link => link.classList.remove("text-light"));
    navLinks.forEach(link => link.classList.add("text-dark"));

    themeButtons.forEach(btn => {
      btn.classList.remove("btn-outline-light");
      btn.classList.add("btn-outline-dark");
      btn.innerHTML = '<i class="bi bi-moon-fill"></i>';
    });
  }
}