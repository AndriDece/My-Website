// togle icon navbar
menuIcon = document.querySelectorAll('#menu-icon');
navbar = document.querySelectorAll('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//scroll section
sections = document.querySelectorAll('section');
navLinks = document.querySelectorAll('header nav a');

window.onscrolln= () => {
    sections.forEach(sec => {
        top = window.scrollY;
        offset = sec.offsetTop - 100;
        height = sec.offsiteHeight;
        id = sec.getAttribute('id');

        if(top >= offsite && top < offsite + height) {
           // active navbar links
           navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
           });
           // active section for animaton on scroll //
           sec.classList.add('show-animate');
        }
        // if want to use animation that repeat on scroll use this //
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classsList.toggle('sticky', windoy.scrollY> 100);

    // remove toggle icon and nevbar when click navbar link(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}