window.addEventListener('scroll',() => {
document.querySelector('nav').classList.toggle('windowScroll',window.scrollY>0);

});