let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*****************  scroll section active link *****************/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
        };
    });

    /**********************Sticky navbar *****************************/
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100)

    /**********************remove  Toggle icon and  navbar *****************************/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


    /**********************scroll reveal *****************************/

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay:200,
});
ScrollReveal().reveal('.home_content, heading', { origin: 'top' });
ScrollReveal().reveal('.home_img, .service_container, .protfolio_box, .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home_content h1, .about_img', { origin: 'left' });
ScrollReveal().reveal('.home_content p, .about_content', { origin: 'right' });

    /********************** Typed js *****************************/
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Web Designer','Youtuber' ],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})