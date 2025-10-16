document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const content = document.getElementById("content");

  async function loadSection(name) {
    const response = await fetch(`sections/${name}.html`);
    const html = await response.text();
    content.innerHTML = html;
    links.forEach(link => link.classList.remove("active"));
    document.querySelector(`[data-section="${name}"]`).classList.add("active");
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const section = link.getAttribute("data-section");
      loadSection(section);
    });
  });

  // Load default section
  loadSection("about");
});