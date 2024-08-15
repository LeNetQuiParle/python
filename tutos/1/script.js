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
    alert("Tout faux ! :(");
  }
}
