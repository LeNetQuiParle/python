function id(id) {
  return document.getElementById(id);
}

function valider1() {
  const reponse1 = id("reponse1").value;
  const reponse2 = id("reponse2").value;

  if (reponse1 === "'" || reponse1 === '"') {
    if (reponse2 === "'" || reponse2 === '"') {
      alert("Correct !");
    } else {
      alert("Première réponse correcte !");
    }
  } else if (reponse2 === "'" || reponse2 === '"') {
    alert("Deuxième réponse correcte !");
  } else {
    alert("Tout faux ! :(  Relisez attentivement le paragraphe");
  }
}

function validerFloat() {
  const reponse = id("float").value;

  if (reponse === "bon") {
    alert("Correct !");
  } else if (reponse === "pas-bon") {
    alert("Faux ! Relisez attentivement le paragraphe.");
  } else {
    alert("Veuillez choisir une option.");
  }
}
