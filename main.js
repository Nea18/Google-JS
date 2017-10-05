/*Afficher les éléments centraux*/

let apparition = document.getElementById("centraux");
let button = document.getElementById("display");

button.onclick = function ()
{
apparition.style.display = 'block';
button.style.display = 'none';
}

/*Recherche google*/

let recherche = document.getElementById("bouton").value;

recherche.onclick = function ()
{
document.location.href = "https://www.google.fr/" + bouton.value;
}

/* Pop up*/

let maPub = document.getElementById("popup").value;

{
  window.open('images/popup.html', 'fenêtre', 'menubar=no','scrollbars=no', 'top=200', 'left=50%', 'width=250, height=200',10000);
}
