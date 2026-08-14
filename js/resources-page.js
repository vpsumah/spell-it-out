/*==================================================
  PAGE RESSOURCES
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


  /*==================================================
    ÉLÉMENTS
  ==================================================*/

  const grid =
    document.querySelector("#articles-grid");

  const filters =
    document.querySelector("#article-filters");

  const search =
    document.querySelector("#article-search");

  const empty =
    document.querySelector("#articles-empty");


  const modal =
    document.querySelector("#article-modal");


  if (!grid || !filters || !modal) return;


  let activeCategory = "Tous";



  /*==================================================
    CATÉGORIES
  ==================================================*/

  const categories = [
    "Tous",
    ...new Set(
      articles.map(
        article => article.category
      )
    )
  ];


  categories.forEach((category) => {

    const button =
      document.createElement("button");


    button.type =
      "button";


    button.textContent =
      category === "Tous"
        ? "Tous les articles"
        : category;


    button.dataset.category =
      category;


    button.classList.add(
      "article-filter-button"
    );


    if (category === "Tous") {

      button.classList.add(
        "is-active"
      );

    }


    button.addEventListener("click", () => {

      activeCategory =
        category;


      document
        .querySelectorAll(".article-filter-button")
        .forEach(item => {

          item.classList.remove(
            "is-active"
          );

        });


      button.classList.add(
        "is-active"
      );


      renderArticles();

    });


    filters.appendChild(button);

  });



  /*==================================================
    RECHERCHE
  ==================================================*/

  search.addEventListener(
    "input",
    renderArticles
  );



  /*==================================================
    AFFICHER LES ARTICLES
  ==================================================*/

  function renderArticles() {

    grid.innerHTML = "";


    const searchTerm =
      search.value
        .trim()
        .toLowerCase();


    const filteredArticles =
      articles.filter((article) => {


        const matchesCategory =
          activeCategory === "Tous" ||
          article.category === activeCategory;


        const searchableText = `
          ${article.title}
          ${article.category}
          ${article.excerpt}
        `.toLowerCase();


        const matchesSearch =
          searchableText.includes(
            searchTerm
          );


        return (
          matchesCategory &&
          matchesSearch
        );

      });


    empty.hidden =
      filteredArticles.length !== 0;


    filteredArticles.forEach((article) => {

      const card =
        document.createElement("article");


      card.classList.add(
        "article-card"
      );


      card.innerHTML = `

        <button
          class="article-card-button"
          type="button"
          data-article-id="${article.id}"
        >

          <img
            src="${article.image}"
            alt=""
          >


          <div class="article-card-content">

            <p class="article-card-category">
              ${article.category}
            </p>

            <h2>
              ${article.title}
            </h2>

            <p>
              ${article.excerpt.trim()}
            </p>

            <span class="article-card-time">
              ${article.readingTime} de lecture
            </span>

          </div>

        </button>

      `;


      grid.appendChild(card);

    });


    activateCards();

  }



  /*==================================================
    CLIC SUR UNE CARTE
  ==================================================*/

  function activateCards() {

    document
      .querySelectorAll("[data-article-id]")
      .forEach((button) => {

        button.addEventListener("click", () => {

          const article =
            articles.find(
              item =>
                item.id ===
                button.dataset.articleId
            );


          if (!article) return;


          openArticle(article);

        });

      });

  }



  /*==================================================
    OUVRIR UN ARTICLE
  ==================================================*/

  function openArticle(article) {


    document.querySelector(
      "#article-modal-category"
    ).textContent =
      article.category;


    document.querySelector(
      "#article-modal-title"
    ).textContent =
      article.title;


    document.querySelector(
      "#article-modal-excerpt"
    ).textContent =
      article.excerpt.trim();


    document.querySelector(
      "#article-modal-reading"
    ).textContent =
      `${article.readingTime} de lecture`;


    document.querySelector(
      "#article-modal-date"
    ).textContent =
      article.date;


    const image =
      document.querySelector(
        "#article-modal-image"
      );


    image.src =
      article.image;


    image.alt =
      article.title;



    /*==================================================
      INTRO
    ==================================================*/

    document.querySelector(
      "#article-modal-introduction"
    ).innerHTML =
      createParagraphs(
        article.introduction
      );


    /* Corps */
    document.querySelector(
      "#article-modal-body"
    ).innerHTML =
      article.content;



    /*==================================================
      AUTEUR
    ==================================================*/

    const author =
      authors.find(
        item =>
          item.id === article.authorId
      );


    if (author) {

      document.querySelector(
        "#article-modal-author"
      ).textContent =
        author.name;


      document.querySelector(
        "#article-author-name"
      ).textContent =
        author.name;


      document.querySelector(
        "#article-author-role"
      ).textContent =
        author.role;


      document.querySelector(
        "#article-author-bio"
      ).textContent =
        author.shortBio.trim();


      const authorImage =
        document.querySelector(
          "#article-author-image"
        );


      authorImage.src =
        author.portrait ||
        author.image;


      authorImage.alt =
        `Portrait de ${author.name}`;


      document.querySelector(
        "#article-author-link"
      ).href =
        `auteur.html?id=${author.id}`;

    }



    /*==================================================
      ARTICLES SIMILAIRES
    ==================================================*/

    renderRelatedArticles(article);



    /*==================================================
      OUVRIR
    ==================================================*/

    modal.classList.add(
      "is-open"
    );


    modal.setAttribute(
      "aria-hidden",
      "false"
    );


    document.body.classList.add(
      "article-modal-open"
    );


    /*
      Remonte en haut de la popup
      chaque fois qu'on ouvre un article.
    */
    document.querySelector(
      ".article-modal-window"
    ).scrollTop = 0;

  }



  /*==================================================
    ARTICLES SIMILAIRES
  ==================================================*/

  function renderRelatedArticles(currentArticle) {

    const relatedList =
      document.querySelector(
        "#article-related-list"
      );


    relatedList.innerHTML = "";


    const related =
      articles
        .filter(
          article =>
            article.category ===
              currentArticle.category &&
            article.id !==
              currentArticle.id
        )
        .slice(0, 3);


    if (related.length === 0) {

      relatedList.innerHTML = `
        <p class="article-related-empty">
          D'autres articles arriveront bientôt.
        </p>
      `;

      return;

    }


    related.forEach((article) => {

      const item =
        document.createElement("button");


      item.type =
        "button";


      item.classList.add(
        "article-related-item"
      );


      item.innerHTML = `

        <img
          src="${article.image}"
          alt=""
        >

        <span>

          <strong>
            ${article.title}
          </strong>

          <small>
            ${article.readingTime} de lecture
          </small>

        </span>

      `;


      item.addEventListener(
        "click",
        () => {

          openArticle(article);

        }
      );


      relatedList.appendChild(item);

    });

  }



  /*==================================================
    FERMER
  ==================================================*/

  document
    .querySelectorAll("[data-close-article]")
    .forEach((button) => {

      button.addEventListener(
        "click",
        closeArticle
      );

    });


  function closeArticle() {

    modal.classList.remove(
      "is-open"
    );


    modal.setAttribute(
      "aria-hidden",
      "true"
    );


    document.body.classList.remove(
      "article-modal-open"
    );

  }



  /* ESC */
  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        modal.classList.contains("is-open")
      ) {

        closeArticle();

      }

    }
  );



  /*==================================================
    TEXTE → PARAGRAPHES
  ==================================================*/

  function createParagraphs(text) {

    if (!text) return "";


    return text
      .trim()
      .split(/\n\s*\n/)
      .map(
        paragraph =>
          `<p>${paragraph.trim()}</p>`
      )
      .join("");

  }



  /* Premier affichage */
  renderArticles();

});