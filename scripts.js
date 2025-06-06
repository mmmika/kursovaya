function search_recipe() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let recipes = document.getElementsByClassName('recipe-card');

    for (let i = 0; i < recipes.length; i++) {
        let title = recipes[i].querySelector('h3').textContent.toLowerCase();
        recipes[i].style.display = title.includes(input) ? "block" : "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const tagFilter = document.getElementById("tagFilter");
    const recipeCards = document.querySelectorAll(".recipe-card");

    tagFilter.addEventListener("change", function () {
        const selectedTag = tagFilter.value;

        recipeCards.forEach(function (card) {
            const tag = card.getAttribute("data-tag");

            if (selectedTag === "all" || tag === selectedTag) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
