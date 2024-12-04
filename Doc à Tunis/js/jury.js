document.getElementById("juryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const juryData = {
        code: document.getElementById("codeJury").value,
        nom: document.getElementById("nomJury").value,
        prenom: document.getElementById("prenomJury").value,
        dateNaissance: document.getElementById("dateNaissanceJury").value,
    };

    console.log("Membre du jury enregistré :", juryData);
    alert("Membre du jury enregistré avec succès !");
    this.reset();
});

document.getElementById("noteForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const noteData = {
        film: document.getElementById("filmSelection").value,
        jury: document.getElementById("jurySelection").value,
        note: document.getElementById("note").value,
    };

    console.log("Note attribuée :", noteData);
    alert("Note attribuée avec succès !");
    this.reset();
});
