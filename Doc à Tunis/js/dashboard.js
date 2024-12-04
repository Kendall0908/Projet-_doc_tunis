// Exemple pour un message personnalisé dans le dashboard
document.addEventListener("DOMContentLoaded", () => {
    const userName = "Administrateur"; // Remplacez par un nom d'utilisateur dynamique si nécessaire
    const welcomeMessage = document.querySelector(".welcome-message");
    welcomeMessage.innerHTML = `Bienvenue, ${userName}. Que souhaitez-vous gérer ?`;
});

// Vérification de la connexion de l'utilisateur
if (!isUserLoggedIn()) {
    window.location.href = "accueil.html";  // Redirige l'utilisateur non connecté vers la page d'accueil
} else {
    window.location.href = "planning.html";  // Redirige l'utilisateur connecté vers la page de planning
}
