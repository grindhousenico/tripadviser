/**
 * Gestion des messages d'informations
 *
 * Un module est un objet (qu'on appelait jusque là tableau associatif en JS).
 *      En JS, un tableau associatif n'existe pas en vrai (pas comme en PHP)
 * Un module peut contenir :
 *      - des propriétés (des espèces de variables)
 *      - des méthodes (des fonctions)
 * Les propriétés et méthodes d'un objet sont séparées par des virgules.
 */
const message = {
    elementClass: "message",

    /**
     * Méthode qui permet d'ajouter un nouveau message dans un élément.
     *
     * @param {String} text
     * @param {Element} parentElement L'élément parent dans lequel on affichera le message
     */
    add: function (text, parentElement) {
        const errorElement = document.createElement("p");
        errorElement.innerText = text;
        errorElement.classList.add(message.elementClass);

        parentElement.prepend(errorElement);
    },

    /**
     * Méthode qui supprime tous les messages contenus dans un élément.
     *
     * @param {Element} parentElement L'élément contenant tous les messages à supprimer
     */
    reset: function (parentElement) {
        const messageElements = parentElement.querySelectorAll("." + message.elementClass);

        for (const messageElement of messageElements) {
            messageElement.remove();
        }
    },
};
