const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".links")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.heading' ,{ origin:'top' });
ScrollReveal().reveal('.cards, .overall-skills, .footer' ,{ origin:'bottom' });
ScrollReveal().reveal('.intro, .portfolio-container, .contact-img' ,{ origin:'left' });
ScrollReveal().reveal('.bio , .certificate-box, .inputs' ,{ origin:'right' });






