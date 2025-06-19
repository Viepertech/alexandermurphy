window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("dark-toggle");
  const darkClass = "dark";

  // Load saved theme preference
  if (localStorage.getItem("theme") === darkClass) {
    document.body.classList.add(darkClass);
    toggleBtn.setAttribute("aria-pressed", "true");
  }

  // Toggle theme on button click
  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle(darkClass);
    localStorage.setItem("theme", isDark ? darkClass : "light");
    toggleBtn.setAttribute("aria-pressed", isDark.toString());
  });
});
