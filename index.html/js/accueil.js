const texte = "blog est une vitrine de la culture Bamiléké, mettant en valeur ses traditions, ses valeurs et son héritage unique transmis à travers les générations.";
let i = 0;
const element = document.getElementById("fade");

function ecrire() {
  element.textContent = texte.slice(0, i);
  i++;

  if (i <= texte.length) {
    setTimeout(ecrire, 80);
  }
}

ecrire();