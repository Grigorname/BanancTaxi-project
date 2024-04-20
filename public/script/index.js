import { translates } from './constants.js';
console.log(translates)

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
    // Остальные элементы...
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

window.onload = function() {
    setWarningText();
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', function() {
        setLanguage(this.value);
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const buttonsContainer = document.querySelector('.buttons');

    menuToggle.addEventListener('click', function() {
        buttonsContainer.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const aboutButton = document.getElementById('about-btn');
    const aboutContent = document.getElementById('about-content');

    aboutButton.addEventListener('click', function() {
        // Переключение класса 'hidden' для контроля видимости элемента
        aboutContent.classList.toggle('hidden');
    });
});

