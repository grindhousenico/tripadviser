console.log("Coucou");

// On récupère l'élément de notre DOM (de notre page) qui a l'id theme-switch
const buttonThemeSwitch = document.getElementById("theme-switch");
console.log(buttonThemeSwitch);

// On récupère tous les éléments de notre DOM qui ont la class theme-button
const buttonsTheme = document.getElementsByClassName("theme-button");
console.log(buttonsTheme);
console.log(buttonsTheme[0]);

// On récupère tous les boutons de la page
const buttons = document.getElementsByTagName("button");
console.log(buttons);

// On re-récupère l'élément de notre DOM (de notre page) qui a l'id theme-switch
const buttonThemeSwitch2 = document.querySelector("#theme-switch");
console.log(buttonThemeSwitch2);

// On re-récupère tous les éléments de notre DOM qui ont la class theme-button
const buttonsTheme2 = document.querySelectorAll(".theme-button");
console.log(buttonsTheme2);
console.log(buttonsTheme2[0]);

// On re-récupère tous les boutons de la page
const buttons2 = document.querySelectorAll("button");
console.log(buttons2);

/*
    On a vu 5 façons de sélectionner des éléments du DOM (des éléments de notre page) :
    - getElementById : renvoie toujours un seul élément (car l'ID est censé être unique)
      et attend un nom d'ID en argument (sans #)
    - getElementsByClassName : renvoie une liste d'éléments (même si un seul élément trouvé)
      et attend un nom de classe en argument (sans .)
    - getElementsByTagName : renvoie une liste d'éléments (même si un seul élément trouvé)
      et attend un nom de balise en argument
    - querySelector : renvoie un seul élément (le premier élément correspondant au sélecteur)
      et attend un sélecteur CSS en argument
    - querySelectorAll : renvoie une liste d'éléments (même si un seul élément trouvé)
      et attend un sélecteur CSS en argument
*/

////////////////////////////////////////////////////////////////////////////////
// Manipuler les textes d'un element
////////////////////////////////////////////////////////////////////////////////

// const title = document.getElementsByTagName("h1")[0];
// const title = document.getElementsByClassName("content__title")[0];
// const title = document.querySelectorAll(".content__title")[0];
// const title = document.querySelector("h1");
// const title = document.querySelector(".content__title");
const title = document.querySelector("main h1.content__title");
console.log(title);
console.log(title.textContent);
console.log(title.innerText);

// title.textContent = "Partir en vacances";
title.innerText = "Partir en vacances";

const footer = document.querySelector('.footer');
console.log(footer);
console.log(footer.textContent);
console.log(footer.innerText);
console.log(footer.innerHTML);

// footer.textContent = "<p>Coucou les gars !</p>"; // Ne marche pas car les balise <p> ne seront pas interprétées
// footer.innerText = "<p>Coucou les gars !</p>"; // Ne marche pas car les balise <p> ne seront pas interprétées
footer.innerHTML = "<p>Coucou les gars !</p>";

////////////////////////////////////////////////////////////////////////////////
// Manipuler les id d'un element
////////////////////////////////////////////////////////////////////////////////

console.log(buttonsTheme2[0].id);
console.log(buttonsTheme2[1].id);
console.log(buttonsTheme2[2].id);

// Si on veut, on peut modifier l'id d'un élément du DOM
// buttonsTheme2[0].id = "toto";

////////////////////////////////////////////////////////////////////////////////
// Manipuler les classes d'un element
////////////////////////////////////////////////////////////////////////////////

console.log(footer.className);

// footer.className = "footer toto tutu";

console.log(footer.classList);
console.log(footer.classList.contains("tutu"));
console.log(footer.classList.contains("tutuzzzzzzzzzzzzz"));

footer.classList.add("azertyuiop", "poiuytreza", "jkfngjkdfhj");
// footer.className += "azertyuiop poiuytreza jkfngjkdfhj"; // On aurait pu faire ça, mais c'est pas ouf

footer.classList.remove("toto", "tutu");

footer.classList.toggle("tata");
// Le toggle est équivalent aux 5 lignes suivantes
// if (footer.classList.contains("tata")) {
//     footer.classList.remove("tata");
// } else {
//     footer.classList.add("tata");
// }


// Récupérer l'attribut type de l'input avec l'id 'subscriber-email'
const input = document.querySelector("#subscriber-email");
console.log(input.getAttribute("type"));
console.log(input.getAttribute("id"));
console.log(input.getAttribute("class"));

input.setAttribute("type", "password");