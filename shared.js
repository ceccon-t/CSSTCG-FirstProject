let modal = document.querySelector('.modal');
let backdrop = document.querySelector('.backdrop');
let modalNoButton = document.querySelector('.modal__action--negative');
let selectPlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

let closeModal = () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
};

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    closeModal();
});
modalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
})
