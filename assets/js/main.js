$(document).ready(function () {
    $('.loader').fadeOut(10000);

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.bottom-nav').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });


    var swiper = new Swiper('.products-swiper', {
        loop: true,
        speed: 900,
        spaceBetween: 15,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
            },
            700:{
                slidesPerView: 1,
            },
            1050:{
                slidesPerView: 4,
            }
        }
    });

    var swiper = new Swiper(".prodcutDetailsThumbsSlider", {
        spaceBetween: 10,
        
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0:{
                slidesPerView: 2,
            },
            700:{
                slidesPerView: 2,
            },
            1050:{
                slidesPerView: 4,
            }
        }
    });
    var swiper2 = new Swiper(".prodcutDetailsSwiper", {
        spaceBetween: 10,
        loop: true,
        thumbs: {
            swiper: swiper,
        },
    });


    var swiper = new Swiper('.blogs-swiper', {
        loop: true,
        speed: 900,
        spaceBetween: 15,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
            },
            700:{
                slidesPerView: 1,
            },
            1050:{
                slidesPerView: 3,
            }
        }
    });
    // const image_Input = document.querySelector('.file-upload');
    // var ulpoadedImage = "";
    // image_Input.addEventListener("change", function() {
    //     const reader = new FileReader();
    //     reader.addEventListener("load", function() {
    //         ulpoadedImage = reader.result;
    //         document.querySelector(".upload-image").style.backgroundImage = `url(${ulpoadedImage})`
    //         document.querySelector(".upload-image .close").style.display = "flex"
    //         document.querySelector(".upload-image .contain img").style.display = "none"
    //     });
    //     reader.readAsDataURL(this.files[0]);
    //     console.log('done')
    // })

    // $(".close").click(function(){
    //     $(this).parent("#uploadImage").style.backgroundImage = 'none'
    // });

});


