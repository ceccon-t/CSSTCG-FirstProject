let modal = document.querySelector('.modal');
let backdrop = document.querySelector('.backdrop');
let selectPlanButtons = document.querySelectorAll('.plan button');

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}
