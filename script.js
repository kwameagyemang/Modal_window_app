'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

// looping over all show-model class
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', function () {
        console.log('Button clicked');
        // this displays modal button when clicked by removing hidden class
        // theres is no . before hidden because we are just selecting class not the selector
        modal.classList.remove('hidden',)
        overlay.classList.remove('hidden')

    })
} 

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
