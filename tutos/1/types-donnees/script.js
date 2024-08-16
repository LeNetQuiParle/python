function id(id) {
  return document.getElementById(id);
}

function validerStr() {
  let reponseStr = id("str").value;

  if (reponseStr === "bon") {
    alert("Correct !");
  } else if (reponseStr === "pas-bon") {
    alert("Faux ! Relisez attentivement le paragraphe.");
  } else {
    alert("Veuillez choisir une option.");
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
