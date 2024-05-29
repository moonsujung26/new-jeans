$(function () {


    function handleScroll() {
        var scrollDowns = document.querySelector('.scroll-downs');
        if (window.scrollY > 0) {
            scrollDowns.style.display = 'none';
        } else {
            scrollDowns.style.display = 'block';
        }
    }

    window.addEventListener('scroll', handleScroll);


    $('.main_visual_slide').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        pauseOnHover: false
    });


    $('.link').on('change', function () {
        const lnk = $(this).val();
        console.log(lnk);
        if (lnk) window.open(lnk)
    });

    $('.to_top button').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600);
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 200) {
            $('.to_top').addClass('on')
        }else {
            $('.to_top').removeClass('on')
        }


    })

})