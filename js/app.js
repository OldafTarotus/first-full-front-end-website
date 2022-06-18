const menu = document.querySelector(`#mobile-menu`);
const menulinks = document.querySelector(`.navbar__menu`);

menu.addEventListener(`click`, function() {
    menu.classList.toggle(`is-active`);
    menulinks.classList.toggle(`active`);
});

const el = document.getElementById('jsScroll');

window.addEventListener('scroll', function (e) {
        if (window.scrollY > 200) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });

function scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
}