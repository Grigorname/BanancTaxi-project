import { translates } from './constants.js';

function setLanguage(language) {
    document.getElementById('titleText').textContent = translates[language].titleText;
    document.getElementById('about-btn').querySelector('button').textContent = translates[language].aboutBtn;
    document.getElementById('rental-btn').querySelector('button').textContent = translates[language].rentalBtn;
    document.getElementById('services-btn').querySelector('button').textContent = translates[language].servicesBtn;
    document.getElementById('warning').textContent = translates[language].warningText;
    document.querySelector('#question_text h3').textContent = translates[language].questionText;
    document.getElementById('one').textContent = translates[language].one_text;
    document.getElementById('tree').textContent = translates[language].tree_text;
    document.getElementById('five').textContent = translates[language].five_text;
    document.getElementById('four').textContent = translates[language].four_text;
    document.getElementById('six').textContent = translates[language].six_text;
    document.getElementById('seven').textContent = translates[language].seven_text;
    document.getElementById('eight').textContent = translates[language].eight_text;
    document.getElementById('nine').textContent = translates[language].nine_text;
    document.getElementById('ten').textContent = translates[language].ten_text;
    document.getElementById('twoo').textContent = translates[language].twoo_text;
    document.getElementById('motor_title').textContent = translates[language].motor_title;
    document.getElementById('motor_info').textContent = translates[language].motor_info;
    document.getElementById('fuel_title').textContent = translates[language].fuel_title;
    document.getElementById('fuel_info').textContent = translates[language].fuel_info;
    document.getElementById('minimum_title').textContent = translates[language].minimum_title;
    document.getElementById('minimum_info').textContent = translates[language].minimum_info;
    document.getElementById('deposite_title').textContent = translates[language].deposite_title;
    document.getElementById('deposite_info').textContent = translates[language].deposite_info;
    document.getElementById('conditioner_title').textContent = translates[language].conditioner_title;
    document.getElementById('conditioner_info').textContent = translates[language].conditioner_info;
    document.getElementById('camera_title').textContent = translates[language].camera_title;
    document.getElementById('camera_info').textContent = translates[language].camera_info;
    document.getElementById('control_title').textContent = translates[language].control_title;
    document.getElementById('control_info').textContent = translates[language].control_info;
    document.getElementById('akpp_info').textContent = translates[language].akpp_info;
    document.getElementById('yearTitle').textContent = translates[language].yearTitle;
    document.getElementById('price_title').innerHTML = translates[language].price_title;
    document.getElementById('yearTitleElantra').textContent = translates[language].yearTitleElantra;
    document.getElementById('akpp_infoElantra').textContent = translates[language].akpp_infoElantra;
    document.getElementById('motor_titleElantra').textContent = translates[language].motor_titleElantra;  
    document.getElementById('fuel_titleElantra').textContent = translates[language].fuel_titleElantra; 
    document.getElementById('fuel_infoElantra').textContent = translates[language].fuel_infoElantra;
    document.getElementById('minimum_titleElantra').textContent = translates[language].minimum_titleElantra; 
    document.getElementById('minimum_infoElantra').textContent = translates[language].minimum_infoElantra;  
    document.getElementById('deposite_titleElantra').textContent = translates[language].deposite_titleElantra;
    document.getElementById('conditioner_titleElantra').textContent = translates[language].conditioner_titleElantra;
    document.getElementById('conditioner_infoElantra').textContent = translates[language].conditioner_infoElantra;
    document.getElementById('camera_titleElantra').textContent = translates[language].camera_titleElantra;
    document.getElementById('camera_infoElantra').textContent = translates[language].camera_infoElantra; 
    document.getElementById('control_titleElantra').textContent = translates[language].control_titleElantra;
    document.getElementById('control_infoElantra').textContent = translates[language].control_infoElantra;
    document.getElementById('price_titleElantra').innerHTML = translates[language].price_titleElantra;
    document.getElementById('yearTitleKia').textContent = translates[language].yearTitleKia;
    document.getElementById('akpp_infoKia').textContent = translates[language].akpp_infoKia;
    document.getElementById('motor_titleKia').textContent = translates[language].motor_titleKia;
    document.getElementById('fuel_titleKia').textContent = translates[language].fuel_titleKia;
    document.getElementById('fuel_infoKia').textContent = translates[language].fuel_infoKia;
    document.getElementById('minimum_titleKia').textContent = translates[language].minimum_titleKia;
    document.getElementById('minimum_infoKia').textContent = translates[language].minimum_infoKia;
    document.getElementById('deposite_titleKia').textContent = translates[language].deposite_titleKia;
    document.getElementById('conditioner_titleKia').textContent = translates[language].conditioner_titleKia;
    document.getElementById('conditioner_infoKia').textContent = translates[language].conditioner_infoKia;
    document.getElementById('camera_titleKia').textContent = translates[language].camera_titleKia; 
    document.getElementById('control_titleKia').textContent = translates[language].control_titleKia; 
    document.getElementById('control_infoKia').textContent = translates[language].control_infoKia; 
    document.getElementById('price_titleKia').innerHTML = translates[language].price_titleKia;
}




function setWarningText() {
    const warningTextElement = document.getElementById('warning');
    const text = translates['hy'].warningText;
    let index = 0;

    function addLetter() {
        if (index < text.length) {
            warningTextElement.textContent += text[index];
            index++;
            setTimeout(addLetter, 40);
        }
    }

    addLetter();
}

document.addEventListener('DOMContentLoaded', function() {
    setWarningText(); // Вызов функции внутри обработчика событий DOMContentLoaded

    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', function() {
        setLanguage(this.value);
    });

    const languageSelector = document.getElementById('languageSelect');
    const dropdownContent = languageSelector.querySelector('.dropdown-content');
    const selectedLang = languageSelector.querySelector('.selected-lang');

    dropdownContent.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            selectedLang.innerHTML = this.innerHTML; // Обновляет выбранный язык с флагом
            setLanguage(this.getAttribute('data-value'));
            dropdownContent.classList.add('hidden'); // Скрывает дропдаун после выбора
        });
    });

    selectedLang.addEventListener('click', function() {
        dropdownContent.classList.toggle('hidden'); // Показывает или скрывает дропдаун
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const buttonsContainer = document.querySelector('.buttons');

    menuToggle.addEventListener('click', function() {
        buttonsContainer.classList.toggle('active');
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     const aboutButton = document.getElementById('about-btn');
//     const aboutContent = document.getElementById('about-content');

//     aboutButton.addEventListener('click', function() {

//         aboutContent.classList.toggle('hidden');
//     });
// });

