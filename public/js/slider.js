/**
 * Created by Ivan on 07.08.2016.
 */
/*$(document).ready(function () {
 /!*создаем переменную - ширина контейнера*!/
 var width = $('#slider-container').width();
 /!*присвоим ширину слайдам*!/
 $('.slides>li').width(width);
 /!*делаем ширину списка достаточной чтоб он уместил все елементы списка,
 * для этого ширину слайда умножаем на количество слайдов*!/
 $('.slides').width(width * $('.slides>li').length);

 /!*positioning
 * смещаем список влево на ширину одного слайда*!/
 $('.slides').css('left', -width);

 /!*помещаем последний слайд в начало списка*!/
 $('.slides>li:last-child').prependTo('.slides');

 /!*move slides forward*!/
 function nextSlide() {
 /!*смещаем влево весь список на ширину слайда*!/
 $('.slides').animate({
 'margin-left': -width
 }, 500, function () {
 $('.slides>li:first-child').appendTo('.slides');
 $('.slides').css('margin-left', 0);
 });
 }

 function prevSlide() {
 /!*смещаем влево весь список на ширину слайда*!/
 $('.slides').animate({
 'margin-left': width
 }, 500, function () {
 $('.slides>li:last-child').prependTo('.slides');
 $('.slides').css('margin-left', 0);
 });
 }

 /!*controls*!/
 $('.next').click(nextSlide);
 $('.prev').click(prevSlide);
 })*/
$(document).ready(function () {
    /*slider1*/
    /*создаем переменную - ширина контейнера*/
    var width = $('.slider-container').width();
    /*присвоим ширину слайдам*/
    $('.slides1>li').width(width);
    /*делаем ширину списка достаточной чтоб он уместил все елементы списка,
     * для этого ширину слайда умножаем на количество слайдов*/
    $('.slides1').width(width * $('.slides1>li').length);

    /*positioning
     * смещаем список влево на ширину одного слайда*/
    $('.slides1').css('left', -width);

    /*помещаем последний слайд в начало списка*/
    $('.slides1>li:last-child').prependTo('.slides1');

    /*move slides forward*/
    function nextSlide1() {
        /*смещаем влево весь список на ширину слайда*/
        $('.slides1').animate({
            'margin-left': -width
        }, 500, function () {
            $('.slides1>li:first-child').appendTo('.slides1');
            $('.slides1').css('margin-left', 0);
        });
    }

    function prevSlide1() {
        /*смещаем влево весь список на ширину слайда*/
        $('.slides1').animate({
            'margin-left': width
        }, 500, function () {
            $('.slides1>li:last-child').prependTo('.slides1');
            $('.slides1').css('margin-left', 0);
        });
    }

    /*controls*/
    $('.up1').click(nextSlide1);
    $('.down1').click(prevSlide1);

    /*************************slider2******************************/
    /*создаем переменную - ширина контейнера*/
    var width = $('.slider-container').width();
    /*присвоим ширину слайдам*/
    $('.slides2>li').width(width);
    /*делаем ширину списка достаточной чтоб он уместил все елементы списка,
     * для этого ширину слайда умножаем на количество слайдов*/
    $('.slides2').width(width * $('.slides2>li').length);

    /*positioning
     * смещаем список влево на ширину одного слайда*/
    $('.slides2').css('left', -width);

    /*помещаем последний слайд в начало списка*/
    $('.slides2>li:last-child').prependTo('.slides2');

    /*move slides forward*/
    function nextSlide2() {
        /*смещаем влево весь список на ширину слайда*/
        $('.slides2').animate({
            'margin-left': -width
        }, 500, function () {
            $('.slides2>li:first-child').appendTo('.slides2');
            $('.slides2').css('margin-left', 0);
        });
    }

    function prevSlide2() {
        /*смещаем влево весь список на ширину слайда*/
        $('.slides2').animate({
            'margin-left': width
        }, 500, function () {
            $('.slides2>li:last-child').prependTo('.slides2');
            $('.slides2').css('margin-left', 0);
        });
    }

    /*controls*/
    $('.up2').click(nextSlide2);
    $('.down2').click(prevSlide2);
})
