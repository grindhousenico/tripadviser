const theme = {
    bodyElement: null,

    data: {
        color: "theme-green"
      },

    init: function () {
        theme.bodyElement = document.querySelector("body");

        theme.colorButtons = document.querySelectorAll(".theme-button");

        //  récupérer l'image logo du site
        theme.logoImage = document.querySelector(".logo__image");

        theme.bind();

        theme.initTheme();
    },

    bind: function () {
        document.querySelector("#theme-switch").addEventListener("click", theme.handleSwitchDarkMode);
        //  event sur mes boutons
        for (const button of theme.colorButtons) {
            button.addEventListener("click", theme.handleClickColor)
        }
    },


    /**
     * Regarde si l'utilisateur a fait une préférence de thème, et si oui, elle l'applique en conséquence
     */
    initTheme: function () {
        // Récupère le localStorage
        const isDark = JSON.parse(localStorage.getItem("isDarkMode"));

        if (isDark) {
            theme.bodyElement.classList.add("theme-dark");
        } else {
            // Ce else, en l'état, on aurait pu s'en passer, mais :
            //  - Imaginez que votre boss demande à votre collègue de mettre le theme dark par défaut...
            //  - Votre collegue il risque de pas se poser de questions, il va aller dans le HTML et ajouter la classe theme-dark au body
            //  - Problème : SANS CE ELSE, si l'user avait choisi le light theme, on n'aurait pas toucher aux classes de body, et donc on serait resté en dark
            //  - Avec ce else, on prévoit cette éventualité
            theme.bodyElement.classList.remove("theme-dark");
        }
    },

    /**
     * Méthode qui sert à alterner entre le thème sombre et le thème clair.
     *
     * Pas besoin de paramètres, parce que je ne veux pas lui dire si il doit passer en dark ou light,
     * c'est à lui de savoir tout seul, comme un grand.
     */
    handleSwitchDarkMode: function () {
        theme.bodyElement.classList.toggle("theme-dark");

        // On va stocker le choix en data persistante (localStorage)
        theme.saveDarkModeToLocalStorage();
    },

    /**
     * Enregistre sur le long terme le choix de l'utilisateur concernant le thème dark ou light
     */
    saveDarkModeToLocalStorage: function () {
        // let isDark;
        // if (theme.bodyElement.classList.contains("theme-dark")) {
        //     isDark = true;
        // } else {
        //     isDark = false;
        // }

        // const isDark = theme.bodyElement.classList.contains("theme-dark") ? true : false;

        const isDark = theme.bodyElement.classList.contains("theme-dark");

        localStorage.setItem("isDarkMode", JSON.stringify(isDark));
    },

    initTheme: function () {
        // Récupère le localStorage
        const isDark = JSON.parse(localStorage.getItem("isDarkMode"));

        if (isDark) {
            theme.bodyElement.classList.add("theme-dark");
        } else {
            // Ce else, en l'état, on aurait pu s'en passer, mais :
            //  - Imaginez que votre boss demande à votre collègue de mettre le theme dark par défaut...
            //  - Votre collegue il risque de pas se poser de questions, il va aller dans le HTML et ajouter la classe theme-dark au body
            //  - Problème : SANS CE ELSE, si l'user avait choisi le light theme, on n'aurait pas toucher aux classes de body, et donc on serait resté en dark
            //  - Avec ce else, on prévoit cette éventualité
            theme.bodyElement.classList.remove("theme-dark");
        }
    },

    /**
     * Méthode qui sert à alterner entre le thème sombre et le thème clair.
     *
     * Pas besoin de paramètres, parce que je ne veux pas lui dire si il doit passer en dark ou light,
     * c'est à lui de savoir tout seul, comme un grand.
     */
    handleSwitchColor: function () {
        theme.bodyElement.classList.toggle("theme-colors");

        // On va stocker le choix en data persistante (localStorage)
        theme.saveColorsModeToLocalStorage();
    },

    /**
     * Enregistre sur le long terme le choix de l'utilisateur concernant le thème dark ou light
     */
    saveDarkModeToLocalStorage: function () {
        // let isDark;
        // if (theme.bodyElement.classList.contains("theme-dark")) {
        //     isDark = true;
        // } else {
        //     isDark = false;
        // }

        // const isDark = theme.bodyElement.classList.contains("theme-dark") ? true : false;

        const isDark = theme.bodyElement.classList.contains("theme-dark");

        localStorage.setItem("isDarkMode", JSON.stringify(isDark));
    },

    //  handle pour les boutons de couleurs
    handleClickColor: function (event) {
        //  comment je sais sur quel bouton j'ai cliqué -> currentTarget
        const color = event.currentTarget.id;
        theme.changeColor(color);
    },
    // changeColor permet de changer le dom pour activer la couleur
    changeColor: function (color) {
        //  gérer la classe du body
        // replace cherche mon theme sauvegardé, et le remplace par le paramètre de la fonction  
        //  c'est cette ligne qui change effctivement le theme
        //  theme-green (theme.data.colo) par exemple devient theme-red (color)
        // Je gère ici le cas de l'initialisation, il n'y a aucune classe donc le replace renverra false
        if (!theme.bodyElement.classList.replace(theme.data.color, color)) {
            theme.bodyElement.classList.add(color);
        }

        // *avec remove et add 
        // theme.body.classList.remove(theme.data.color);
        // theme.body.classList.add(color);

        //  gérer l'img
        // on change le src du logo pour changer l'image en rapport avec le theme choisi
        theme.logoImage.src = `img/logo-${color}.png`

        //  mettre à jour data
        theme.data.color = color;

        //  gérer le localStorage !
        // ici on sauvegarde l'état de notre theme
       //  appLocalStorage.saveToJson("theme", theme.data);
        localStorage.setItem("theme", JSON.stringify(theme.data));
    },


};

document.addEventListener("DOMContentLoaded", theme.init);
