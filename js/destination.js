const destination = {
    errorMessageNotConnectedUser: "Vous devez être connecté pour gérer vos favoris",

    /**
     * Cette fonction doit être appelée dés le chargement de la page pour initialiser tout ce qui doit l'être.
     * Par exemple, nous on va directement vouloir mettre des event listeners sur les boutons de favoris.
     */
    init: function () {
        destination.bindFavoritesButtons();
    },

    /**
     * Méthode pour lier les boutons de favoris au bon handler
     */
    bindFavoritesButtons: function () {
        // Ajouter des events listeners sur les boutons de favoris
        const favoriteButtons = document.querySelectorAll(".btn__like");

        for (const button of favoriteButtons) {
            button.addEventListener("click", destination.handleFavoriteClick);
        }
    },

    /**
     * Handler déclanché au clic sur les boutons de favoris
     */
    handleFavoriteClick: function (event) {
        // On doit récupérer l'élément parent dans lequel mettre le message d'erreur.
        // Ça va être le .card, mais attention, il faut bien prendre le .card qui contient le bouton réellement cliqué.
        //      - Déjà, il faut récupérer le bon bouton
        //      - Il faudra chercher l'ancêtre .card de ce bouton
        //      - c'est ce card qu'on passera en param à messages.add

        const clickedButton = event.currentTarget;

        // const card = clickedButton.parentElement.parentElement;
        // const card = clickedButton.parentNode.parentNode;
        const card = clickedButton.closest('.card');

        message.reset(card);

        message.add(destination.errorMessageNotConnectedUser, card);
    },
}

// Une fois que tout le DOM de la page est chargé, alors on appel destinations.init()
document.addEventListener('DOMContentLoaded', destination.init);