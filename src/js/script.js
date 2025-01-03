const buttonTop = document.querySelector('.scrollTopBtn');

buttonTop.addEventListener('click', e => {
    scroll(0, 0);
})

addEventListener('scroll', e => {
    if (document.documentElement.scrollTop < 520) {
        buttonTop.style.display = 'none';
    } else {
        buttonTop.style.display = 'block';
    }
})