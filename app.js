
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

menuLinks.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function showPage(page) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    })
    document.querySelector(`#${page}`).style.display = flex;
}

document.querySelectorAll('button').forEach(button => {
    button.onclick = function() {
        showPage(this.dataset.page);
    }
})