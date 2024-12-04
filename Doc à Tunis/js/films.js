document.getElementById("filmForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const filmData = {
        code: document.getElementById("codeFilm").value,
        titre: document.getElementById("titreFilm").value,
        date: document.getElementById("dateFilm").value,
        sujet: document.getElementById("sujetFilm").value,
        realisateur: {
            code: document.getElementById("codeRealisateur").value,
            nom: document.getElementById("nomRealisateur").value,
            prenom: document.getElementById("prenomRealisateur").value,
            dateNaissance: document.getElementById("dateNaissanceRealisateur").value,
        },
        producteur: {
            code: document.getElementById("codeProducteur").value,
            nom: document.getElementById("nomProducteur").value,
            prenom: document.getElementById("prenomProducteur").value,
            dateNaissance: document.getElementById("dateNaissanceProducteur").value,
        },
    };

    console.log("Film enregistré :", filmData);
    alert("Film enregistré avec succès !");
    this.reset();
});
