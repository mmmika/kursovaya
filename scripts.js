function search_recipe() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let recipes = document.getElementsByClassName('recipe-card');

    for (let i = 0; i < recipes.length; i++) {
        let title = recipes[i].querySelector('h3').textContent.toLowerCase();
        recipes[i].style.display = title.includes(input) ? "block" : "none";
    }
}
