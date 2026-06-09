const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const category = card.dataset.category;

        // Replace with navigation later
        alert(`You selected: ${category}`);

        // Example navigation:
        // window.location.href = `${category.toLowerCase().replace(" ", "-")}.html`;
    });
});