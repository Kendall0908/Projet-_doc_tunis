document.addEventListener("DOMContentLoaded", () => {
    const roleList = document.getElementById("roleList");
    const userSelect = document.getElementById("userSelect");
    const roleSelect = document.getElementById("roleSelect");

    // Exemple de données (à remplacer par une API ou une base de données)
    const roles = ["Responsable des inspections"];
    const users = ["Utilisateur 1", "Utilisateur 2"];

    // Remplir dynamiquement la liste des rôles
    function loadRoles() {
        roleList.innerHTML = "";
        roles.forEach(role => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${role}</span>
                <button class="edit-button">Modifier</button>
                <button class="delete-button">Supprimer</button>
            `;
            roleList.appendChild(li);
        });
    }

    // Remplir les listes déroulantes
    function loadSelectOptions() {
        userSelect.innerHTML = "<option value=''>-- Sélectionner un utilisateur --</option>";
        roleSelect.innerHTML = "<option value=''>-- Sélectionner un rôle --</option>";

        users.forEach((user, index) => {
            const option = document.createElement("option");
            option.value = index + 1;
            option.textContent = user;
            userSelect.appendChild(option);
        });

        roles.forEach(role => {
            const option = document.createElement("option");
            option.value = role;
            option.textContent = role;
            roleSelect.appendChild(option);
        });
    }

    // Initialiser
    loadRoles();
    loadSelectOptions();
});
