const buttons = document.querySelectorAll(".filters button");
const items = document.querySelectorAll(".work-item");
const searchInput = document.getElementById("searchInput");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    items.forEach(item => {
      item.style.display =
        filter === "all" || item.classList.contains(filter)
          ? "block"
          : "none";
    });
  });
});

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(value) ? "block" : "none";
  });
});
