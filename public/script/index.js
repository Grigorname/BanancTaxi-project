import { translates } from './constants.js';

let currentLanguage = 'hy'; 
let isWarningTextSet = false; 
let isWarningAnimationRunning = false; 

function setLanguage(language) {
    currentLanguage = language; 

    document.getElementById('titleText').textContent = translates[language].titleText;
    document.getElementById('about-btn').querySelector('button').textContent = translates[language].aboutBtn;
    document.getElementById('rental-btn').querySelector('button').textContent = translates[language].rentalBtn;
    document.getElementById('services-btn').querySelector('button').textContent = translates[language].servicesBtn;

    const questionTextElement = document.querySelector('#question_text h3');
    if (questionTextElement) {
        questionTextElement.textContent = translates[language].questionText;
    }

    const elementsToTranslate = [
        { id: 'one', key: 'one_text' },
        { id: 'tree', key: 'tree_text' },
        { id: 'five', key: 'five_text' },
        { id: 'four', key: 'four_text' },
        { id: 'six', key: 'six_text' },
        { id: 'seven', key: 'seven_text' },
        { id: 'eight', key: 'eight_text' },
        { id: 'nine', key: 'nine_text' },
        { id: 'ten', key: 'ten_text' },
        { id: 'twoo', key: 'twoo_text' },
        { id: 'motor_title', key: 'motor_title' },
        { id: 'motor_info', key: 'motor_info' },
        { id: 'fuel_title', key: 'fuel_title' },
        { id: 'fuel_info', key: 'fuel_info' },
        { id: 'minimum_title', key: 'minimum_title' },
        { id: 'minimum_info', key: 'minimum_info' },
        { id: 'deposite_title', key: 'deposite_title' },
        { id: 'deposite_info', key: 'deposite_info' },
        { id: 'conditioner_title', key: 'conditioner_title' },
        { id: 'conditioner_info', key: 'conditioner_info' },
        { id: 'camera_title', key: 'camera_title' },
        { id: 'camera_info', key: 'camera_info' },
        { id: 'control_title', key: 'control_title' },
        { id: 'control_info', key: 'control_info' },
        { id: 'akpp_info', key: 'akpp_info' },
        { id: 'yearTitle', key: 'yearTitle' },
        { id: 'price_title', key: 'price_title' },
        { id: 'yearTitleElantra', key: 'yearTitleElantra' },
        { id: 'akpp_infoElantra', key: 'akpp_infoElantra' },
        { id: 'motor_titleElantra', key: 'motor_titleElantra' },
        { id: 'fuel_titleElantra', key: 'fuel_titleElantra' },
        { id: 'fuel_infoElantra', key: 'fuel_infoElantra' },
        { id: 'minimum_titleElantra', key: 'minimum_titleElantra' },
        { id: 'minimum_infoElantra', key: 'minimum_infoElantra' },
        { id: 'deposite_titleElantra', key: 'deposite_titleElantra' },
        { id: 'conditioner_titleElantra', key: 'conditioner_titleElantra' },
        { id: 'conditioner_infoElantra', key: 'conditioner_infoElantra' },
        { id: 'camera_titleElantra', key: 'camera_titleElantra' },
        { id: 'camera_infoElantra', key: 'camera_infoElantra' },
        { id: 'control_titleElantra', key: 'control_titleElantra' },
        { id: 'control_infoElantra', key: 'control_infoElantra' },
        { id: 'price_titleElantra', key: 'price_titleElantra' },
        { id: 'yearTitleKia', key: 'yearTitleKia' },
        { id: 'akpp_infoKia', key: 'akpp_infoKia' },
        { id: 'motor_titleKia', key: 'motor_titleKia' },
        { id: 'fuel_titleKia', key: 'fuel_titleKia' },
        { id: 'fuel_infoKia', key: 'fuel_infoKia' },
        { id: 'minimum_titleKia', key: 'minimum_titleKia' },
        { id: 'minimum_infoKia', key: 'minimum_infoKia' },
        { id: 'deposite_titleKia', key: 'deposite_titleKia' },
        { id: 'conditioner_titleKia', key: 'conditioner_titleKia' },
        { id: 'conditioner_infoKia', key: 'conditioner_infoKia' },
        { id: 'camera_titleKia', key: 'camera_titleKia' },
        { id: 'camera_infoKia', key: 'camera_infoKia' },
        { id: 'control_titleKia', key: 'control_titleKia' },
        { id: 'control_infoKia', key: 'control_infoKia' },
        { id: 'price_titleKia', key: 'price_titleKia' }
    ];

    elementsToTranslate.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
            element.innerHTML = translates[language][item.key];
        }
    });
}

function setWarningText(language) {
    const warningTextElement = document.getElementById('warning');
    if (warningTextElement && !isWarningAnimationRunning) {
        isWarningAnimationRunning = true; 
        const text = translates[language].warningText;
    
        let index = 0;
        warningTextElement.textContent = ''; 

        function addLetter() {
            if (index < text.length) {
                warningTextElement.textContent += text[index];
                index++;
                setTimeout(addLetter, 30);
            } else {
                isWarningTextSet = true; 
                isWarningAnimationRunning = false; 
            }
        }

        if (!isWarningTextSet) {
            addLetter();
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('languageSelect');
    languageSelector.addEventListener('click', function(event) {
        const target = event.target.closest('.dropdown-item');
        if (target) {
            const lang = target.getAttribute('data-value');
            setLanguage(lang);
            languageSelector.querySelector('.selected-lang').innerHTML = target.innerHTML;
            languageSelector.querySelector('.dropdown-content').classList.add('hidden');
            isWarningTextSet = false; 
            setWarningText(lang); 
        }
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const buttonsContainer = document.querySelector('.buttons');
    const burgerIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-times');

    function toggleMenu() {
        buttonsContainer.classList.toggle('active');
        burgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    }

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && buttonsContainer.classList.contains('active')) {
            toggleMenu();
        }
    });

    const loadContent = (url, language) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
                setLanguage(language); 
                setWarningText(language); 
            })
            .catch(error => console.error('Error loading content:', error));
    };

    const showAllContent = (language) => {
        const about = fetch('./public/about.html').then(response => response.text());
        const rental = fetch('./public/rental.html').then(response => response.text());
        const services = fetch('./public/services.html').then(response => response.text());

        Promise.all([about, rental, services])
            .then(contents => {
                document.getElementById('content').innerHTML = contents.join('<hr>');
                setLanguage(language); 
                setWarningText(language); 
            })
            .catch(error => console.error('Error loading content:', error));
    };

    document.getElementById('about-btn').addEventListener('click', () => loadContent('./public/about.html', currentLanguage));
    document.getElementById('rental-btn').addEventListener('click', () => loadContent('./public/rental.html', currentLanguage));
    document.getElementById('services-btn').addEventListener('click', () => loadContent('./public/services.html', currentLanguage));

    
    showAllContent(currentLanguage);
});
