// DAMIT IN DARKMODE UMGESCHALTET WERDEN KANN

// querySelector sucht das Element in Klammer im html
const modeButton = document.querySelector('.mode-button');

// .addEventListener -> etwas machen wenn dies passiert -> ('click', () => 
modeButton.addEventListener('click', () => {
    // classList alle Classes .toggle umschalten ('darkmode') in diese Class 
    document.body.classList.toggle('darkmode');
});