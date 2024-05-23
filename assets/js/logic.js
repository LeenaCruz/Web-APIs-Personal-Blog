// function icon of dark mode could be here?





// agarrar el valor del mode si es dark o light
// puedo gudardarlo en local storage 
// luego lo jalo 
// sile dan click al osl se guarda light
// si le dan click ala luna s eguarda dark
// si el valor es light/dark quieor que mis elementos apliuqen una clsae de ligh/dark
// set attribute ? 

const modeSwitcher = document.querySelector('.modeSwitcher')
const container = document.querySelector('.styleAll')

modeSwitcher.setAttribute('src', './assets/images/light-icon.png')
modeSwitcher.setAttribute('class', 'modeSwitcher')

// let mode = localStorage.getItem('currentMode');
// console.log(mode);

// on click event 

function init() {

    mode = localStorage.getItem('currentMode');

    if (mode.value === "") {
        mode = 'light';
        container.setAttribute('class', 'light');
        modeSwitcher.setAttribute('src', './assets/images/light-icon.png')
    }

    else if (mode === 'light') {
        mode = 'light';
        container.setAttribute('class', 'light');
        modeSwitcher.setAttribute('src', './assets/images/light-icon.png')
    }

    else {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        modeSwitcher.setAttribute('src', './assets/images/dark-icon.png')
    }

    localStorage.setItem('currentMode', (mode));
    console.log(mode);

}

modeSwitcher.addEventListener('click', function () {


    if (mode === 'dark') {
        mode = 'light';
        container.setAttribute('class', 'light');
        modeSwitcher.setAttribute('src', './assets/images/light-icon.png')
    }

    else {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        modeSwitcher.setAttribute('src', './assets/images/dark-icon.png')
    }

    localStorage.setItem('currentMode', (mode));
    console.log(mode);
});

init();