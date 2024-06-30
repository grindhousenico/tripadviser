const slider = {
    sliderImages: [
        "ocean.jpg",
        "ski.jpg",
        "city.jpg",
    ],

    /**
     * On liste ici toutes les images générées → permettra de les retrouver plus facilement sans fouiller tout le DOM
     */
    imageElements: [],

    /**
     * Propriété stockant en live la position de l'image courante
     *      -> pas besoin de rechercher plus tard laquelle est courante, on le sait déjà
     */
    currentPosition: 0,

    init: function () {
        slider.generateImages();
        slider.bindNavigationButtons();
    },

    /**
     * Crée les images du slider et rempli ce dernier
     */
    generateImages: function () {
        const sliderContainer = document.querySelector(".slider");

        for (const sliderImage of slider.sliderImages.reverse()) {
            const newSliderImage = document.createElement('img');

            newSliderImage.src = "img/" + sliderImage;
            newSliderImage.classList.add("slider__img");
            newSliderImage.alt = "Image " + sliderImage;

            sliderContainer.prepend(newSliderImage); // Ajoute au début du parent

            // On stock notre nouvelle image, comme ça, plus tard, pas besoin de parcourir le DOM pour les retrouver
            slider.imageElements.unshift(newSliderImage);
        }

        slider.goToSlide(0);
    },

    /**
     * Relier les boutons précédent et suivant aux bons handlers
     */
    bindNavigationButtons: function () {
        const sliderButtons = document.querySelectorAll(".slider__btn");

        const previousButton = sliderButtons[0];
        const nextButton = sliderButtons[1];

        previousButton.addEventListener("click", slider.handlePreviousSlide);
        nextButton.addEventListener("click", slider.handleNextSlide);
    },

    handlePreviousSlide: function () {
        // On est dans le prev, donc globalement, on va vouloir faire un -1 (si on affichait l'image 2, on voudra afficher l'image 1)
        // Mais si on est sur l'image 0, faire un -1 va nous amener à chercher une image qui n'existe pas
        //      -> dans ce cas, on va plutot chercher la dernière image (pour faire une sorte de boucle sur le slider)

        const newPosition = slider.currentPosition <= 0
            ? slider.sliderImages.length - 1
            : slider.currentPosition - 1;

        slider.goToSlide(newPosition);
    },

    handleNextSlide: function () {
        const newPosition = slider.currentPosition >= slider.sliderImages.length - 1
            ? 0
            : slider.currentPosition + 1;

        // let newPosition;
        // if (slider.currentPosition >= slider.sliderImages.length - 1) {
        //     newPosition = 0;
        // } else {
        //     newPosition = slider.currentPosition + 1;
        // }

        slider.goToSlide(newPosition);
    },

    goToSlide: function (newPosition) {
        // On commence par masquer toutes les images
        for (const key in slider.imageElements) {
            slider.imageElements[key].classList.remove("slider__img--current");
        }

        // On affiche uniquement celle demandée
        slider.imageElements[newPosition].classList.add("slider__img--current");

        // On met à jour currentPosition qui nous sert de repère d'où on en est.
        slider.currentPosition = newPosition;
    },
};

document.addEventListener('DOMContentLoaded', slider.init);