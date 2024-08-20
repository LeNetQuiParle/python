function validerVar() {
    let reponse = document.getElementById("reponse").value;
    if (reponse === "nom = 'Tommy'") {
        alert("Bravo !")
    } else if (reponse === 'nom = "Tommy"') {
        alert("Bravo !")
    } else {
        alert("Faux ! Relisez bien la syntaxe et faites attention aux espaces et majuscules")
    }
}