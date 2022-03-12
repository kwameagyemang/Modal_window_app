'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    // this displays modal button when clicked by removing hidden class
        // theres is no . before hidden because we are just selecting class not the selector
        // classlist.remove disables hidden class to reveal content when clicked 
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    // classlist.add allows hidden class to remain hidden when clicked 
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// looping over all show-model class
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// keydown function is when you control what happens when a key is pressed on a keyboard
// in this case, we specify the esc keydown
document.addEventListener('keydown', function (e) {
    console.log(e.key)

    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
       closeModal();
    }
});
