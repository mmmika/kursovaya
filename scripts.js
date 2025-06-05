function search_recipe() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let recipes = document.getElementsByClassName('recipe-card');

    for (let i = 0; i < recipes.length; i++) {
        let title = recipes[i].querySelector('h3').textContent.toLowerCase();
        recipes[i].style.display = title.includes(input) ? "block" : "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("tagFilter");
  const recipes = document.querySelectorAll(".recipe");

  if (select) {
    select.addEventListener("change", () => {
      const selectedTag = select.value;

      recipes.forEach(recipe => {
        const tag = recipe.getAttribute("data-tag");
        if (selectedTag === "all" || tag === selectedTag) {
          recipe.style.display = "block";
        } else {
          recipe.style.display = "none";
        }
      });
    });
  }
});

