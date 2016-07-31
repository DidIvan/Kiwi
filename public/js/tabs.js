$(document).ready(function () {
    /*tabs*/
    $('ul.tabs-list').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section').find('ul.brands-list').removeClass('active').eq($(this).index()).addClass('active');
    });

    /*$('.tabs-list li').hasClass('active', function() {
        $(".active>.arrow-top").css("display", "block");
    })*/
    $(".accordion .accord-header").click(function() {
        if($(this).next("div").is(":visible")){
            $(this).next("div").slideUp("slow");
        } else {
            $(".accordion .accord-content").slideUp("slow");
            $(this).next("div").slideToggle("slow");
        }
    });

    /*menu for 320px*/
    $('.btn-menu').on('click', function () {
        $('.side-menu').slideToggle();
        $(this).toggleClass("active");
    })
    /*zoom*/

    $(".certificate-image").on('click', function () {    // Событие клика на маленькое изображение
        var img = $(this);    // Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $(".standards").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>" + // Блок, который будет служить фоном затемненным
            "<img src='" + src + "' class='popup_img' />" + // Само увеличенное фото
            "</div>");
        $(".popup").fadeIn(800); // Медленно выводим изображение
        $(".popup_bg").click(function () {    // Событие клика на затемненный фон
            $(".popup").fadeOut(800);    // Медленно убираем всплывающее окно
            setTimeout(function () {    // Выставляем таймер
                $(".popup").remove(); // Удаляем разметку всплывающего окна
            }, 800);
        });
    });
});

