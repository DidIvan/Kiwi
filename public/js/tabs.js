$(document).ready(function () {
    $('ul.tabs-list').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section').find('ul.brands-list').removeClass('active').eq($(this).index()).addClass('active');
        $(this)
            .find(".active").css("display", "block")
    });

/* $('ul.tabs-list li').on('click','li:(.active)',function () {
     $(".active").toggle(".arrow-top");
    });*/

/*        $(".active").toggle(".arrow-top").css("display", "block");*/



  /*  $("ul.tabs-list li").one("click", function () {
        if ($(this).is(":first-child")) {
            $(".arrow-top").css("display", "block")
            $("p").text("It's the first div.");
        } else if ($(this).is(".blue,.red")) {
            $("p").text("It's a blue or red div.");
        } else if ($(this).is(":contains('Peter')")) {
            $("p").text("It's Peter!");
        } else {
            $("p").html("It's nothing <em>special</em>.");
        }
        $("p").hide().slideDown("slow");
        $(this).css({
            "border-style": "inset",
            cursor: "default"
        });
    });*/
  /*  $('.certificate img').click(function () {
        $(this).css("width","200%","height","200%")
    })*/
});

