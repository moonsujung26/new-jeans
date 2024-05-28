$(function () {
    $('.main_visual_slide').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        pauseOnHover: false
    });

    function handleScroll() {
        var scrollDowns = document.querySelector('.scroll-downs');
        if (window.scrollY > 0) {
            scrollDowns.style.display = 'none';
        } else {
            scrollDowns.style.display = 'block'; 
        }
    }
    
    window.addEventListener('scroll', handleScroll);

    $('.link').on('change', function () {
        const lnk = $(this).val();
        console.log(lnk);
        if (lnk) window.open(lnk)
    });

})