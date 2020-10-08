var navigationbar = document.getElementsByClassName("navigationbar");
window.onscroll = function () {
    if (document.getElementsByClassName('intro')[0].getBoundingClientRect().y <= 94) {
        document.getElementsByClassName("navigationbar")[0].classList.add('small');
    } else {
        document.getElementsByClassName("navigationbar")[0].classList.remove('small');
    }

};
