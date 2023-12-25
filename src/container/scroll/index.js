setInterval(() => {
    if (window.scrollY > 0) {
        window.buttonScroll.style.display = 'flex';
    } else {
        window.buttonScroll.style.display = 'none';
    }
}, 500);

window.buttonScroll.onclick = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
};
