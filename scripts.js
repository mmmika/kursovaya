function search_recipe() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let recipes = document.getElementsByClassName('recipe-card');

    for (let i = 0; i < recipes.length; i++) {
        let title = recipes[i].querySelector('h3').textContent.toLowerCase();
        recipes[i].style.display = title.includes(input) ? "block" : "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchbar');
    const tagItems = document.querySelectorAll('.item[data-tag]');
    const cards = document.querySelectorAll('.recipe-card');
    let selectedTag = null;

    function updateRecipes() {
        const query = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const tags = card.dataset.tags.toLowerCase();

            const matchesSearch = title.includes(query);
            const matchesTag = !selectedTag || tags.includes(selectedTag);

            card.style.display = (matchesSearch && matchesTag) ? 'block' : 'none';
        });
    }

    // Поиск по названию
    searchInput.addEventListener('input', updateRecipes);

    // Фильтрация по тегу
    tagItems.forEach(tag => {
        tag.addEventListener('click', () => {
            if (selectedTag === tag.dataset.tag.toLowerCase()) {
                selectedTag = null;
                tag.classList.remove('active');
            } else {
                selectedTag = tag.dataset.tag.toLowerCase();
                tagItems.forEach(t => t.classList.remove('active'));
                tag.classList.add('active');
            }
            updateRecipes();
        });
    });

    $('.ui.dropdown').dropdown(); // Semantic UI инициализация
});
