/*==================================================
  PAGE INDIVIDUELLE D'UN AUTEUR
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


  /*==================================================
    TROUVER L'AUTEUR DEMANDÉ
  ==================================================*/

  const params =
    new URLSearchParams(window.location.search);


  const authorId =
    params.get("id");


  const author =
    authors.find(
      item => item.id === authorId
    );


  /*
    Si aucun auteur ne correspond,
    retour à la page des auteurs.
  */
  if (!author) {

    window.location.href =
      "auteurs.html";

    return;

  }



  /*==================================================
    TITRE DE LA PAGE
  ==================================================*/

  document.title =
    `${author.name} | Éditions Spell It Out`;



  /*==================================================
    HERO
  ==================================================*/

  const image =
    document.querySelector("#author-profile-image");


  image.src =
    author.portrait;


  image.alt =
    `Portrait de ${author.name}`;


  document.querySelector(
    "#author-profile-name"
  ).textContent =
    author.name;


  document.querySelector(
    "#author-profile-role"
  ).textContent =
    author.role;



  /*==================================================
    STATUT
  ==================================================*/

  const status =
    document.querySelector("#author-profile-status");


  status.textContent =
    author.statusLabel;


  status.classList.add(
    `author-status-${author.status}`
  );



  /*==================================================
    BIO
  ==================================================*/

  document.querySelector(
    "#author-profile-bio"
  ).innerHTML =
    createParagraphs(author.fullBio);



  /*==================================================
    UNIVERS
  ==================================================*/

document.querySelector(
  "#author-universe-text"
).innerHTML =
  createParagraphs(author.universe || "");



  /*==================================================
    THÈMES
  ==================================================*/

  const themesGrid =
    document.querySelector("#author-themes-grid");


  (author.themes || []).forEach((theme) => {

    const item =
      document.createElement("div");


    item.classList.add(
      "author-theme-item"
    );


    item.innerHTML = `
      <span aria-hidden="true">✦</span>
      <p>${theme}</p>
    `;


    themesGrid.appendChild(item);

  });



  /*==================================================
    CITATION
  ==================================================*/
document.querySelector(
  "#author-quote"
).textContent =
  (author.quote || "").trim();


  document.querySelector(
    "#author-quote-name"
  ).textContent =
    `— ${author.name}`;



  /*==================================================
    LIVRES
  ==================================================*/

  const booksGrid =
    document.querySelector("#author-books-grid");


  const emptyMessage =
    document.querySelector("#author-books-empty");


  /*
    Recherche dans books.js les livres
    dont les IDs apparaissent dans author.books
  */
  const authorBooks =
    books.filter(
      book =>
        author.books.includes(book.id)
    );


  if (authorBooks.length === 0) {

    booksGrid.hidden = true;

    emptyMessage.hidden = false;

  } else {

    authorBooks.forEach((book) => {

      const card =
        document.createElement("article");


      card.classList.add(
        "author-book-card"
      );


      card.innerHTML = `

        <img
          src="${book.cover}"
          alt="Couverture de ${book.title}"
        >

        <h3>
          ${book.title}
        </h3>

        <p>
          ${book.genre || ""}
        </p>

      `;


      booksGrid.appendChild(card);

    });

  }



  /*==================================================
    TRANSFORME UN TEXTE EN PARAGRAPHES
  ==================================================*/

  function createParagraphs(text) {

    return text
      .trim()
      .split(/\n\s*\n/)
      .map(
        paragraph =>
          `<p>${paragraph.trim()}</p>`
      )
      .join("");

  }

});