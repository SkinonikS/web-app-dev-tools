(function ($) {
    $('document').ready(function() {
        $('#arrow-img').css({ position: 'relative', left: '0px' });
        
        $('#arrow-btn').click(function () {
            const $arrowImg = $('#arrow-img');
        
            $arrowImg.css({ left: `${parseInt($arrowImg.css('left')) + 10}px` })
        });
        
        $('#go-to-top').click(function () {
            $("html, body").animate({ scrollTop: "0px" });
        });

        $('.article__section')
            .children('.article__section__title')
            .css({ cursor: 'pointer' })
            .click(function () {
                $(this).next('.article__section__content').slideToggle();
            });
    
        $('body').fadeIn(1250);
     });
})(jQuery);
