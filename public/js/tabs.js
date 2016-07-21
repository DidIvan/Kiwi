(function ($) {
    $(function () {
        $('ul.tabs-list').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('section').find('ul.brands-list').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);

