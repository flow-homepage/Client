function openAboutUs() {
  document.addEventListener('DOMContentLoaded', () => {
    const modalButtons = document.querySelectorAll('.modal-button');
    console.log(modalButtons);
    modalButtons.forEach((modalButton, i) => {
      modalButton.addEventListener('click', () => {
        const modalContainers = document.querySelectorAll('.modal-container');
        modalContainers[i].classList.add('fade-in');
      });
    });
    document.querySelectorAll('.modal-exit').forEach(modalExit => {
      modalExit.addEventListener('click', () => {
        console.log('is it getting the click?');
        document
          .querySelectorAll('.modal-container')
          .forEach(modalContainer => {
            modalContainer.classList.remove('fade-in');
            console.log('test');
          });
      });
    });
  });
}
openAboutUs();
