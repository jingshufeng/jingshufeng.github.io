var outerNav = document.getElementById("outerNav");
window.onscroll = function () {
    if (document.getElementById("outerFourSeasons").getBoundingClientRect().y <= 94) {
        outerNav.classList.add('small');
    } else {
        outerNav.classList.remove('small');
    }

};