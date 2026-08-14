/*==================================================
  POPUP - CONDITIONS DE SOUMISSION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

  const modal =
    document.querySelector("#submission-terms-modal");

  const openButton =
    document.querySelector("#open-submission-terms");


  if (!modal || !openButton) return;


  /* Ouvrir */
  openButton.addEventListener("click", () => {

    modal.classList.add("is-open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "terms-modal-open"
    );

  });


  /* Fermer */
  document
    .querySelectorAll("[data-close-terms]")
    .forEach((button) => {

      button.addEventListener("click", closeModal);

    });


  function closeModal() {

    modal.classList.remove("is-open");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "terms-modal-open"
    );

  }


  /* ESC ferme aussi */
  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      modal.classList.contains("is-open")
    ) {

      closeModal();

    }

  });

});