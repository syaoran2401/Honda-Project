$(document).ready(function () {

    $('#vehical__list').mCustomScrollbar({
        theme: 'dark',
    });

    function move(value) {
        $('#vehical__list').mCustomScrollbar('scrollTo', value, {
            scrollEasing: 'easeOut'
        })
    }
    $('.vehicle__nav ul li a').click(function () {
        if ($(this).attr('id') === 'minivan-nav') {
            move('#minivan');
        } else if ($(this).attr('id') === 'cars-nav') {
            move('#cars');
        } else if ($(this).attr('id') === 'crossover-nav') {
            move('#crossover');
        }
    })

    $('#myNavbar > a').click(function () {
        let count = '';
        if (count === '') {
            count = $(this).attr('id');
            $(this).addClass('active');
            if (count === 'vehicle__link') {
                $('#vehicles').removeClass('hide__vehicle');
                $('.vehicle__nav').addClass('animate__fadeInDown');
                $('#vehical__list').addClass('animate__fadeInUp');
            }
        } else if (count === $(this).attr('id')) {
            $(this).removeClass('active');
            count = '';
            $('.vehicle__nav').addClass('animate__fadeOutUp');
            $('#vehical__list').addClass('animate__fadeOutDown');
            setTimeout(function () {
                $('#vehicles').addClass('hide__vehicle');
                $('.vehicle__nav').removeClass('animate__fadeOutUp');
                $('#vehical__list').removeClass('animate__fadeOutDown');
            }, 300);
        } else {
            $('#myNavbar > a').removeClass('active');
            $(this).addClass('active');
            count = $(this).attr('id');
            if (count !== 'vehicle__link') {
                $('.vehicle__nav').addClass('animate__fadeOutUp');
                $('#vehical__list').addClass('animate__fadeOutDown');
                setTimeout(function () {
                    $('#vehicles').addClass('hide__vehicle');
                    $('.vehicle__nav').removeClass('animate__fadeOutUp');
                    $('#vehical__list').removeClass('animate__fadeOutDown');
                }, 300);
            } else {
                $('#vehicles').removeClass('hide__vehicle');
                $('.vehicle__nav').addClass('animate__fadeInDown');
                $('#vehical__list').addClass('animate__fadeInUp');
            }
        }
    })

    $('#vehical__close').click(function () {
        $('.vehicle__nav').addClass('animate__fadeOutUp');
        $('#vehical__list').addClass('animate__fadeOutDown');
        setTimeout(function () {
            $('#vehicles').addClass('hide__vehicle');
            $('.vehicle__nav').removeClass('animate__fadeOutUp');
            $('#vehical__list').removeClass('animate__fadeOutDown');
        }, 300);
        $('#myNavbar a').removeClass('active');
        count = '';
    })

    $('.vehical__product').addClass("animate__animated animate__fadeInUp");


    $('.carousel__indicators__config li').click(function(){
        $('.carousel__indicators__config li').removeClass('active');
        $(this).addClass('active');
    })


    $('.indicators__xs__header').click(function(){
        $('.carousel__indicators__xs ol').slideToggle();
        if ($('.indicators__xs__header i').hasClass('transform__rotate')){
            $('.indicators__xs__header i').removeClass('transform__rotate');
        }
        else{
            $('.indicators__xs__header i').addClass('transform__rotate');

        }

    })

    $('.carousel__indicators__xs ol li').click(function(){
        $('.indicators__title span').html($(this).html());
        $('.carousel__indicators__xs ol').slideUp();
    })

    let count= 0;
    $('.carousel-control-prev').click(function(){
        $('.carousel__indicators__config li').removeClass('active');
        if(count == 0){
            count = 4;
        }
        else{
            count --;
        }
        $('.carousel__indicators__config li').each(function(i){
            if(i == count){
                $(this).addClass('active');
                $('.indicators__title span').html($(this).html());
            }
        })
    })



    $('.carousel-control-next').click(function(){
        $('.carousel__indicators__config li').removeClass('active');
        if(count == 4){
            count = 0;
        }
        else{
            count ++;
        }
        $('.carousel__indicators__config li').each(function(i){
            if(i == count){
                $(this).addClass('active');
                $('.indicators__title span').html($(this).html());
            }
        })
    })


    $('.back__to__top').click(function(){
        $('body,html').animate({scrollTop:0}, 1000);
    })

    function collapse(){
        let width= $(window).width();
        console.log(width);
        if(width >= 768){
            $('.collapse__ul').removeClass('collapse');
        }else if(width < 768){
            $('.collapse__ul').addClass('collapse');
        }
    }
    $(window).resize(function(){
        collapse();
    })

    $(document).ready(function(){
        collapse();
    })
})
// WOW
new WOW().init();

// Swiper
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})



