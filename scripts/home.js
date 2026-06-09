const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const category = card.dataset.category;

        window.location.href = `./pages/${category.toLowerCase().replace(" ", "-")}.html`;
    });
});