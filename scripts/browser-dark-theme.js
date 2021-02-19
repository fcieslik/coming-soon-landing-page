import sunUrl from '../assets/icons/sun.svg';
import moonUrl from '../assets/icons/moon.svg';

const browser = document.querySelector('.browser');
const darkTheme = document.querySelector('.browser__theme');
const browserThemeText = document.querySelector('.browser__theme span')
const browserThemeIcon = document.querySelector('.browser__theme img')

function toggle() {
    browser.classList.toggle('browser-dark')
    if (browserThemeText.textContent === 'Light') {
        browserThemeText.textContent = 'Dark'
        browserThemeIcon.src = moonUrl;
    } else {
        browserThemeText.textContent = 'Light'
        browserThemeIcon.src = sunUrl;
    }
}

darkTheme.addEventListener('click', () => toggle())
