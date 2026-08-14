/*==================================================
  POPUP DES LIVRES
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.querySelector("#book-modal");

  if (!modal) return;


  /*==================================================
    ÉLÉMENTS DE LA POPUP
  ==================================================*/

  const modalImage = document.querySelector("#book-modal-image");
  const modalTitle = document.querySelector("#book-modal-title");
  const modalAuthor = document.querySelector("#book-modal-author");
  const modalGenre = document.querySelector("#book-modal-genre");
  const modalSummary = document.querySelector("#book-modal-summary");

  const modalPages = document.querySelector("#book-modal-pages");
  const modalPublication = document.querySelector("#book-modal-publication");
  const modalIsbn = document.querySelector("#book-modal-isbn");

  const excerptButton = document.querySelector("#book-excerpt-button");
  const excerptSection = document.querySelector("#book-excerpt");
  const excerptContent = document.querySelector("#book-excerpt-content");
  const excerptBack = document.querySelector("#book-excerpt-back");

  const buyButton = document.querySelector("#book-buy-button");

  const mainLayout = document.querySelector(".book-modal-layout");

  const languageButtons =
    document.querySelectorAll("[data-book-language]");


  /*
    Livre actuellement ouvert.
    On le garde en mémoire pour pouvoir changer de langue.
  */
  let currentBook = null;


  /*==================================================
    OUVRIR UN LIVRE
  ==================================================*/

  document.querySelectorAll("[data-book-id]").forEach((button) => {

    button.addEventListener("click", () => {

      const bookId = button.dataset.bookId;

      const book = books.find(
        (item) => item.id === bookId
      );

      if (!book) return;


      currentBook = book;


      /* Infos communes aux deux langues */
      modalImage.src = book.cover;
      modalImage.alt = `Couverture du livre ${book.title}`;

      modalTitle.textContent = book.title;
      modalAuthor.textContent = book.author;
      modalGenre.textContent = book.genre;


      /*
        Affiche automatiquement la langue définie
        comme langue principale du livre.
      */
      setBookLanguage(book.defaultLanguage || "fr");


      /* Revient toujours à la fiche principale */
      mainLayout.hidden = false;
      excerptSection.hidden = true;


      /* Ouvre la popup */
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");

      document.body.classList.add("modal-open");

    });

  });


  /*==================================================
    CHANGER LA LANGUE
  ==================================================*/

  languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

      if (!currentBook) return;

      const language =
        button.dataset.bookLanguage;

      setBookLanguage(language);

    });

  });


  function setBookLanguage(language) {

    if (!currentBook) return;


    const edition =
      currentBook.languages?.[language];


    /* Si cette langue n'existe pas pour ce livre */
    if (!edition) return;


    /* Résumé */
    modalSummary.innerHTML = `
      <p>${edition.summary.trim()}</p>
    `;


    /* Informations de l'édition */
    modalPages.textContent =
      edition.pages || "À venir";

    modalPublication.textContent =
      edition.publication || "À venir";

    modalIsbn.textContent =
      edition.isbn || "À venir";


    /* Extrait */
    excerptContent.innerHTML = `
      <p>${edition.excerpt.trim()}</p>
    `;


    /* Lien d'achat propre à cette édition */
    buyButton.href =
      edition.buyLink || "#";


    /*
      Indique visuellement quel bouton
      de langue est actif.
    */
    languageButtons.forEach((button) => {

      const isActive =
        button.dataset.bookLanguage === language;

      button.classList.toggle(
        "is-active",
        isActive
      );

      button.setAttribute(
        "aria-pressed",
        isActive
      );

    });

  }


  /*==================================================
    FERMER LA POPUP
  ==================================================*/

  document
    .querySelectorAll("[data-close-book-modal]")
    .forEach((button) => {

      button.addEventListener(
        "click",
        closeBookModal
      );

    });


  function closeBookModal() {

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    currentBook = null;

  }


  /*==================================================
    AFFICHER L'EXTRAIT
  ==================================================*/

  excerptButton.addEventListener("click", () => {

    mainLayout.hidden = true;
    excerptSection.hidden = false;

  });


  /* Retour à la fiche */
  excerptBack.addEventListener("click", () => {

    excerptSection.hidden = true;
    mainLayout.hidden = false;

  });


  /*==================================================
    TOUCHE ESC
  ==================================================*/

  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      modal.classList.contains("is-open")
    ) {

      closeBookModal();

    }

  });

});