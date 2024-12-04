

// Récupérer le formulaire
const form = document.getElementById("planningForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs des champs du formulaire
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    // Créer un objet pour la projection
    const newProjection = {
        title,
        date,
        time,
        location,
        description
    };

    // Sauvegarder la projection dans le localStorage
    let planning = JSON.parse(localStorage.getItem("planning")) || [];
    planning.push(newProjection);
    localStorage.setItem("planning", JSON.stringify(planning));

    // Afficher un message de confirmation
    alert("Projection ajoutée au planning !");

    // Réinitialiser le formulaire
    form.reset();
});

