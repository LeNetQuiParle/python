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
  let reponseFloat = id("float").value;

  if (reponseFloat === "bon") {
    alert("Correct !");
  } else if (reponseFloat === "pas-bon") {
    alert("Faux ! Relisez attentivement le paragraphe.");
  } else {
    alert("Veuillez choisir une option.");
  }
}

function validerBool() {
  let reponseBool = id("bool").value;

  if (reponseBool === "bon") {
    alert("Correct !");
  } else if (reponseBool === "pas-bon") {
    alert("Faux ! Relisez attentivement le paragraphe.");
  } else {
    alert("Veuillez choisir une option.");
  }
}
