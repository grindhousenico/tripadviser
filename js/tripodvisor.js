/////////////////////////////////////////////////////////////////////////////////
// COOKIES
////////////////////////////////////////////////////////////////////////////////

// - Ils sont partagé entre le client (navigateur) et le serveur
// - Ils peuvent être créé en JS ou en PHP
// - Ils ont une durée limitée (qu'on peut leur renseigner) → cette durée peut être très longue
// - Ils ont peu de mémoire (quantité) → on les utilise que pour stocker des petits trucs légers qui seront utile côté serveur

// document.cookie = 'cle=valeur';
// ajoute un cookie avec la clé lang et la valeur français
document.cookie = 'lang=français; max-age=31536000';
document.cookie = 'test=toto';
document.cookie = 'chocapic=cestfortenchocolat';

console.log(document.cookie); // donne toute la grande String contenant tous les cookies

// pour lire un cookie il faut "un peu" de logique
const cookiesAsArray = document.cookie.split('; ');
console.log(cookiesAsArray);

// on parcourt le tableau
for (const cookie of cookiesAsArray) {
    // si la chaîne commence par le début du cookie qui nous intéresse
    if (cookie.startsWith('chocapic')) {
        // on découpe le contenu du cookie
        const cookieInfo = cookie.split('=');
        console.log(cookieInfo);

        // pour récupérer que la valeur
        const value = cookieInfo[1];
        // la valeur est trouvée
        console.log(value);
    }
}

// Pour supprimer un cookie, il suffit de le redéfinir avec une date d'expiration passée


////////////////////////////////////////////////////////////////////////////////
// LOCALSTORAGE
////////////////////////////////////////////////////////////////////////////////

// - Ils ont une durée de vie potentiellement illimité
// - Ils a pas de soucis de mémoire → ça veut pas dire qu'il n'a pas de limite, mais faut s'accrocher pour l'atteindre
// - Ils est 100% front (aucun lien avec le serveur)
// - Ils ne stockent que des String → si vous y mettez un nombre, il sera transformé en String
// - En utilisant la technique du JSON, on pourra stocker tout et n'importe quoi, pas que des String (indirectement)

// l'objet localStorage est global, il est toujours disponible :
// - via la méthode setItem on sauvegarde une information, même si je quitte la page et que je reviens, l'information est persistante
// - on passe 2 arguments, la clé pour retrouver la valeur plus tard, et la valeur
localStorage.setItem('age', 31);
localStorage.setItem('lang', "français");

console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("lang"));

const trucASauvegarder = {
    age: 31,
    color: 'orange',
};

const trucASauvegarderJson = JSON.stringify(trucASauvegarder);
console.log(trucASauvegarder);
console.log(trucASauvegarderJson);

localStorage.setItem("data", trucASauvegarderJson);
console.log(localStorage.getItem("data"));
console.log(JSON.parse(localStorage.getItem("data")));

localStorage.setItem('salaire', JSON.stringify(3000));
console.log(JSON.parse(localStorage.getItem('salaire')));

// Conseil : pour ne pas être embêté par les changements de type (en devenant string) :
// - Créer votre propre méthode qui enregistre un localStorage en utilisant JSON.stringify
// - Créer votre propre méthode qui récupère un localStorage en utilisant JSON.parse
// De cette façon, vous récupérerai toujours la bonne valeur avec son type initial

// Pour détruire un localStorage, on peut utiliser la méthode removeItem
localStorage.removeItem("lang");

// On peut supprimer d'un coup tous les localStorage (de notre domaine)
// localStorage.clear();

////////////////////////////////////////////////////////////////////////////////
// SESSIONSTORAGE
////////////////////////////////////////////////////////////////////////////////

// - Elles ont une durée de vie très limitée : quelques minutes
// - Elles sont détruite si le navigateur se ferme completement
// - Elles ne sont pas liées au serveur (100% client)
// - Elles ont une bonne mémoire (quantité)

sessionStorage.setItem('age', 31);
sessionStorage.setItem('lang', "français");

console.log(sessionStorage.getItem("age"));
console.log(sessionStorage.getItem("lang"));

const trucASauvegarder2 = {
    age: 31,
    color: 'orange',
};

const trucASauvegarder2Json = JSON.stringify(trucASauvegarder2);
console.log(trucASauvegarder2);
console.log(trucASauvegarder2Json);

sessionStorage.setItem("data", trucASauvegarder2Json);
console.log(sessionStorage.getItem("data"));
console.log(JSON.parse(sessionStorage.getItem("data")));

sessionStorage.setItem('salaire', JSON.stringify(3000));
console.log(JSON.parse(sessionStorage.getItem('salaire')));

// Pour détruire un sessionStorage, on peut utiliser la méthode removeItem
sessionStorage.removeItem("lang");

// On peut supprimer d'un coup tous les sessionStorage (de notre domaine)
sessionStorage.clear();


////////////////////////////////////////////////////////////////////////////////
// QUAND CHOISIR QUOI ?
////////////////////////////////////////////////////////////////////////////////

// Le cookie si on a besoin de faire transiter la donnée avec le serveur :
// publicité, des pixels facebook, un indicateur comme quoi on veut rester connecter à un site, etc.

// Le sessionStorage si on n'a pas besoin de faire transiter l'info au serveur ET que on veut que ça dure pas trop longtemps.

// Le localStorage pour tout autre données qui mériterait de perdurer dans le temps (on ne veut pas repartir de 0 à chaque refresh ou redirection)