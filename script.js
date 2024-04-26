let MenuBtn = document.getElementById('MenuBtn');

function btnClick() {

    document.querySelector('body').classList.toggle('mobile-nav-active');
    MenuBtn.classList.toggle('fa-xmark');
    MenuBtn.classList.toggle('fa-bars');

}


// typing effect

let typed = new Typed('.auto-input', {
    strings: ['Front-end Developer!', 'Student!', 'UI-designer!'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})


let navlinks = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')

window.addEventListener("scroll", function () {
    const ScrollPos = window.scrollY
    sections.forEach(section => {
        if (ScrollPos > section.offsetTop && ScrollPos < (section.offsetTop + section.offsetHeight)) {
            navlinks.forEach(link=>{
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            })
        }
    })
})