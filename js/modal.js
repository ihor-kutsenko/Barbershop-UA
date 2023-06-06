(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    otherButtons: document.querySelectorAll('.open-modal'), // замініть на ваш селектор для інших кнопок
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.otherButtons.forEach(button => {
    button.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
