const burger_menu = document.getElementById('burger_menu');
const header_nav = document.querySelector('.header_links');

const firstButton = document.getElementById('first_button');
const secondButton = document.getElementById('second_button');

const firstEmail = document.getElementById('first-form_email');
const secondEmail = document.getElementById('second-form_email');

const firstCheckbox = document.getElementById('checkbox1');
const secondCheckbox = document.getElementById('checkbox2');

const regularValidation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

burger_menu.addEventListener('click', (e) => {
    burger_menu.classList.toggle('open_menu');
    header_nav.classList.toggle('open_menu');
});

firstEmail.addEventListener('input', (event) => isFormValid1());
firstCheckbox.addEventListener('click', (event) => isFormValid1());

secondEmail.addEventListener('input', (event) => isFormValid2());
secondCheckbox.addEventListener('click', (event) => isFormValid2());

const isFormValid1 = () => {
    let isValid = regularValidation.test(String(firstEmail.value).toLowerCase());

    if (firstCheckbox.checked && isValid) {
        firstButton.disabled = false;
        return;
    }

    firstButton.disabled = true;
};

const isFormValid2 = () => {
    let isValid = regularValidation.test(String(secondEmail.value).toLowerCase());

    if (secondCheckbox.checked && isValid) {
        secondButton.disabled = false;
        return;
    }

    secondButton.disabled = true;
};

// Слайдер комплекта

const complectSliders = document.getElementById('complect').querySelectorAll('.single_block');
const complectRadioButtons = document
    .getElementById('complect')
    .querySelector('.complect_radioGroup')
    .querySelectorAll('input');

let complectSliderTimer = setInterval(complectAutoPlay, 3000);
let activeComplectSliderIndex = 0;

for (let i = 0; i < complectRadioButtons.length; i++) {
    complectRadioButtons[i].addEventListener('click', (event) => {
        activeComplectSliderIndex = i;
        clearInterval(complectSliderTimer);
        for (let j = 0; j < complectRadioButtons.length; j++) {
            complectSliders[j].classList.remove('active');
        }
        complectSliders[i].classList.add('active');
        complectSliderTimer = setInterval(complectAutoPlay, 3000);
    });
}

const checkActiveRadio = (index) => {
    complectRadioButtons[index].checked = true;
};

function complectAutoPlay() {
    if (activeComplectSliderIndex === complectSliders.length - 1) {
        complectSliders[activeComplectSliderIndex].classList.remove('active');
        complectSliders[0].classList.add('active');
        activeComplectSliderIndex = 0;
        checkActiveRadio(activeComplectSliderIndex);
    } else {
        complectSliders[activeComplectSliderIndex].classList.remove('active');
        complectSliders[activeComplectSliderIndex + 1].classList.add('active');
        activeComplectSliderIndex++;
        checkActiveRadio(activeComplectSliderIndex);
    }
}

// Скрипт слайдера отзывов

const reviews_right_button = document.getElementById('reviews_right_button');
const reviews_left_button = document.getElementById('reviews_left_button');

const reviews_list = document.getElementById('reviews').querySelectorAll('.single_review');

let active_review_index = 0;

reviews_right_button.addEventListener('click', (event) => {
    if (active_review_index < reviews_list.length - 1) {
        active_review_index++;
        for (let i = 0; i < reviews_list.length; i++) {
            reviews_list[i].classList.remove('active');
        }
        reviews_list[active_review_index].classList.add('active');
    } else {
        return;
    }
});

reviews_left_button.addEventListener('click', (event) => {
    if (active_review_index > 0) {
        active_review_index--;
        for (let i = 0; i < reviews_list.length; i++) {
            reviews_list[i].classList.remove('active');
        }
        reviews_list[active_review_index].classList.add('active');
    } else {
        return;
    }
});
