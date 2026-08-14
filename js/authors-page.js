/*==================================================
  PAGE - NOS AUTEURS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

  const authorsGrid =
    document.querySelector("#authors-grid");


  if (!authorsGrid) return;


  authors.forEach((author) => {

    const card =
      document.createElement("article");


    card.classList.add("author-card");


    card.innerHTML = `

      <a
        class="author-card-image"
        href="auteur.html?id=${author.id}"
      >

        <img
          src="${author.image}"
          alt="Portrait de ${author.name}"
        >

      </a>


      <div class="author-card-content">

        <h3>
          ${author.name}
        </h3>

        <span class="author-status author-status-${author.status}">
  ${author.statusLabel}
</span>


        <p class="author-card-role">
          ${author.role}
        </p>


        <p class="author-card-genres">
          ${author.genres.join(" • ")}
        </p>


        <p class="author-card-bio">
          ${author.shortBio.trim()}
        </p>


        <a
  class="author-card-link"
  href="auteur.html?id=${author.id}"
>
  Découvrir
</a>

      </div>

    `;


    authorsGrid.appendChild(card);

  });

});