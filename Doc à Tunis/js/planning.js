
// Récupérer les projections depuis le localStorage
function loadPlanning() {
    const planningContainer = document.querySelector(".planning-grid");

    // Vérifier si nous avons des projections stockées
    const planning = JSON.parse(localStorage.getItem("planning")) || [];

    // Afficher chaque projection dans un élément HTML
    planning.forEach((projection) => {
        const card = document.createElement("div");
        card.classList.add("planning-card");

        card.innerHTML = `
            <h3>${projection.title}</h3>
            <p><strong>Date :</strong> ${projection.date}</p>
            <p><strong>Heure :</strong> ${projection.time}</p>
            <p><strong>Lieu :</strong> ${projection.location}</p>
            <p>${projection.description}</p>
        `;

        planningContainer.appendChild(card);
    });
}

// Charger le planning lorsque la page est prête
document.addEventListener("DOMContentLoaded", loadPlanning);
