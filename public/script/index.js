import { translates } from './constants.js';
import { elementsToTranslate  } from "./translation.js";

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
                const content = document.getElementById('content');
                content.innerHTML = data;
                setLanguage(language); 
                setWarningText(language); 
                loadFooter(); 
            })
            .catch(error => console.error('Error loading content:', error));
    };

    const showAllContent = (language) => {
        const about = fetch('./public/about.html').then(response => response.text());
        const rental = fetch('./public/rental.html').then(response => response.text());
        const services = fetch('./public/services.html').then(response => response.text());

        Promise.all([about, rental, services])
            .then(contents => {
                const content = document.getElementById('content');
                content.innerHTML = contents.join('<hr>');
                setLanguage(language); 
                setWarningText(language); 
                loadFooter(); 
            })
            .catch(error => console.error('Error loading content:', error));
    };

    const loadFooter = () => {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        footer.innerHTML = `
            <div class="social-icons">
                <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://wa.me/+37477636706" target="_blank"><i class="fab fa-whatsapp"></i></a>
                <a href="viber://chat?number=+37494808520" target="_blank"><i class="fab fa-viber"></i></a>
                <a href="https://t.me/+79284889349" target="_blank"><i class="fab fa-telegram-plane"></i></a>
            </div>
            <div class="contact-info">
                <p>+37477636706</p>
                <p>Banantstaxi@yandex.ru</p>
            </div>
        `;
        const existingFooter = document.querySelector('footer.footer');
        if (existingFooter) {
            existingFooter.remove();
        }
        document.body.appendChild(footer);
    };

    document.getElementById('about-btn').addEventListener('click', () => loadContent('./public/about.html', currentLanguage));
    document.getElementById('rental-btn').addEventListener('click', () => loadContent('./public/rental.html', currentLanguage));
    document.getElementById('services-btn').addEventListener('click', () => loadContent('./public/services.html', currentLanguage));
    document.getElementById('logo').addEventListener('click', () => showAllContent(currentLanguage));

    showAllContent(currentLanguage);
});
