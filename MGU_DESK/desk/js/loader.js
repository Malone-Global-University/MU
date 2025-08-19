document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(async el => {
    let file = el.getAttribute("data-include");
    let resp = await fetch(file);
    if (resp.ok) {
      el.innerHTML = await resp.text();
    }
  });
});
