function moveRight() {
    const left = $('#arrow').css('left');
    $('#arrow').css({ left: `${parseInt(left) + 10}px` })
}

$('document').ready(function() {
    // arrow
    $('#arrow').css({ position: 'relative', left: '0px' });

    // go to top
    $('#go-to-top').click(function () {
        $("html, body").animate({ scrollTop: "0px" });
    });

    // slide
    $('h2').css('cursor', 'pointer');
    $('h2').click(function () {
        $(this).nextUntil('h2').slideToggle();
    });

    $('body').fadeIn(1250);
 });