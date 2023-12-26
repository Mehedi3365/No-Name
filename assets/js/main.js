$(document).ready(function() {

    // for testimonial
    $('.testimonial-box').owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        donts: false,
        nav: false,

        responsive: {
            // breakpoint from 0 upzl
            0: {
                items: 1,
                margin: 10,
            },
            479: {
                items: 1.8,
                margin: 10,

            },
            767: {
                items: 2,
                margin: 20,
            },
            992: {
                items: 3,
                margin: 20,
            },


        }

    });
    // for mobitle menu
    $('.menutreger').click(function() {
        $('.mobile-menu').toggleClass('menuShow');
        $('#navbar2').toggleClass('ismenu');
    });

    // magnific-popup
    $('.mgpvieo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false,
    });
});
// window scroll mathod
function windowScroll() {
    const navbar = document.getElementById("navbar2");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("is-sticky");
    } else {
        navbar.classList.remove("is-sticky");
    }
}
window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})