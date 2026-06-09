const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    if (card.matches("a[href]")) {
        return;
    }

    card.addEventListener("click", () => {
        const category = card.dataset.category;

        window.location.href = `./pages/${category.toLowerCase().replace(" ", "-")}.html`;
    });
});
