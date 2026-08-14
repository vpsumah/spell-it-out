document.addEventListener("DOMContentLoaded", async () => {
  await loadIncludes();

  setActiveNavigationLink();
  initializeMobileMenu();
});


/*==================================================
  CHARGEMENT DES COMPOSANTS HTML
==================================================*/

async function loadIncludes() {
  const includeElements = document.querySelectorAll("[data-include]");

  for (const element of includeElements) {
    const filePath = element.getAttribute("data-include");

    try {
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error(
          `Impossible de charger le fichier : ${filePath}`
        );
      }

      const htmlContent = await response.text();

      /* Remplace le div temporaire par le contenu du fichier */
      element.outerHTML = htmlContent;
    } catch (error) {
      console.error(error);

      element.innerHTML = `
        <p class="include-error">
          Le composant n’a pas pu être chargé.
        </p>
      `;
    }
  }
}


/*==================================================
  LIEN ACTIF DANS LA NAVIGATION
==================================================*/

function setActiveNavigationLink() {
  const navigationLinks =
    document.querySelectorAll("[data-nav-link]");

  /*
    Récupère le nom du fichier actuel.
    Exemple : a-propos.html
  */
  let currentPage =
    window.location.pathname.split("/").pop();

  /*
    Lorsque l’adresse se termine simplement par un slash,
    on considère que la page actuelle est index.html.
  */
  if (!currentPage) {
    currentPage = "index.html";
  }

  navigationLinks.forEach((link) => {
    const linkPage = link
      .getAttribute("href")
      .split("/")
      .pop();

    if (linkPage === currentPage) {
      link.classList.add("active");

      /*
        Indique aux technologies d’assistance
        qu’il s’agit de la page actuelle.
      */
      link.setAttribute("aria-current", "page");
    }
  });
}


/*==================================================
  MENU MOBILE
==================================================*/

function initializeMobileMenu() {
  const menuButton =
    document.querySelector(".mobile-menu-button");

  const navigation =
    document.querySelector(".main-navigation");

  if (!menuButton || !navigation) {
    return;
  }

  menuButton.addEventListener("click", () => {
    const menuIsOpen =
      navigation.classList.toggle("is-open");

    menuButton.classList.toggle(
      "is-open",
      menuIsOpen
    );

    menuButton.setAttribute(
      "aria-expanded",
      menuIsOpen
    );

    menuButton.setAttribute(
      "aria-label",
      menuIsOpen
        ? "Fermer le menu"
        : "Ouvrir le menu"
    );
  });

  /*
    Ferme automatiquement le menu mobile
    lorsqu’un lien est sélectionné.
  */
  navigation
    .querySelectorAll("a")
    .forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuButton.classList.remove("is-open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Ouvrir le menu"
        );
      });
    });
}