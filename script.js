// this handle and change header once scroll by toggle into another class which we define in our css

window.addEventListener('scroll',() => {
document.querySelector('nav').classList.toggle('windowScroll',window.scrollY>0);

});
// show and hide faq answer by toggle to the open class in css
const faqs=document.querySelectorAll('.faq');
faqs.forEach(
    faq=>{
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');
//to change the icon we choose from font awesome icons
const icon = faq.querySelector('.faq-icon i');
if (icon.className==='fa-solid fa-plus'){
    icon.className= 'fa-solid fa-minus'
}else{
icon.className= 'fa-solid fa-plus';
}
    })
}) 