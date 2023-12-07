// window scroll mathod
function windowScroll() {
    const navbar = document.getElementById("navbar");
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


// magnific-popup
// $(document).ready(function() {
//     $('.mgpvieo').magnificPopup({
//         type: 'image'
//     });
// });

$(document).ready(function() {
    $('.mgpvieo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});