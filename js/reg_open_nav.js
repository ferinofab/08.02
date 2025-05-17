let btn_open_nav = document.getElementById('open_nav');



btn_open_nav.addEventListener('click', () => {
    let header = document.querySelector('.header');
    header.classList.toggle('active_nav');
})