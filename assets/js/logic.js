// function icon of dark mode could be here?



const modeSwitcher = document.querySelector('.modeSwitcher')
const container = document.querySelector('.styleAll')

modeSwitcher.setAttribute('src', './assets/images/light-icon.png')
modeSwitcher.setAttribute('class', 'modeSwitcher')

function init() {

    mode = localStorage.getItem('currentMode') || "";
    if (mode === "") {
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
    //console.log(mode);

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
    //console.log(mode);
});



init();