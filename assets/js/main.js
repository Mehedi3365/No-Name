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





$(document).ready(function() {
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