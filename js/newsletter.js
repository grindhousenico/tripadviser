const newsletter = {
    forbiddenDomains: [
        '@yopmail.com',
        '@yopmail.fr',
        '@yopmail.net',
        '@cool.fr.nf',
        '@jetable.fr.nf',
        '@courriel.fr.nf',
        '@moncourrier.fr.nf',
        '@monemail.fr.nf',
        '@monmail.fr.nf',
        '@hide.biz.st',
        '@mymail.infos.st',
    ],

    // Le fait de stocker tous les éléments dés l'initialisation apporte plusieurs avantages :
    //      - Certains sont utilisé plusieurs fois → ici, on évite au navigateur de se refarcir tout le DOM à chaque fois
    //          - Plus rapide a exécuter
    //          - Plus écolo
    //      - En terme de lisibilité, tout développeur qui voit cette partie va plus ou moins comprendre que
    //        ces éléments son sensibles car réellement utilisés (en gros, on lui dit attention si tu touche)
    popupElement: null,

    inputElement: null,

    anchorElement: null,

    crossElement: null,

    formElement: null,

    init: function () {
        newsletter.initElement();
        newsletter.bind();
    },

    initElement: function () {
        newsletter.popupElement = document.querySelector(".newsletter");
        newsletter.inputElement = document.querySelector("#subscriber-email");
        newsletter.anchorElement = document.querySelector("#newsletter-anchor");
        newsletter.crossElement = document.querySelector(".newsletter__close");
        newsletter.formElement = newsletter.popupElement.querySelector("form");
    },

    bind: function () {
        newsletter.anchorElement.addEventListener("click", newsletter.handleToggle);
        newsletter.crossElement.addEventListener("click", newsletter.handleClose);

        newsletter.formElement.addEventListener("submit", newsletter.handleSubmit);
    },

    handleToggle: function (event) {
        event.preventDefault(); // Bloque le comportement par défaut du lien (la redirection)

        newsletter.popupElement.classList.toggle("newsletter--on");
    },

    handleClose: function () {
        newsletter.popupElement.classList.remove("newsletter--on");
    },

    handleSubmit: function (event) {
        event.preventDefault();

        // On reset l'eventuel message d'erreur existant (dans le cas où on a déjà fait une verif avec un email invalide)
        message.reset(newsletter.popupElement);

        // On récupère l'email saisi par l'utilisateur
        const email = newsletter.inputElement.value;

        // Maintenant qu'on a la valeur, il est temps de vérifier
        const isForbidden = newsletter.isForbiddenEmail(email);

        // Si l'email est interdit, on va afficher un message d'erreur
        if (isForbidden) {
            message.add("Les adresses jetables ne sont pas admises", newsletter.popupElement);
        } else {
            // A la place du console.log, il faudrait faire l'inscription réelle
            console.log("Adresse email récupérée !");

            // Vider le formulaire
            event.currentTarget.reset();

            // Cacher le bloc newsletter
            newsletter.handleClose();
        }
    },

    /**
     * Vérifie si un email est interdit
     *
     * @param {String} email
     *
     * @returns {Boolean} True si l'email est interdit, sinon false
     */
    isForbiddenEmail: function (email) {
        for (const domain of newsletter.forbiddenDomains) {
            if (email.includes(domain)) {
                return true;
            }
        }

        return false;
    }
};

document.addEventListener("DOMContentLoaded", newsletter.init);