function moveRight() {
    const left = $('#arrow').css('left');
    $('#arrow').css({ left: `${parseInt(left) + 10}px` })
}

$('document').ready(function() {
    $('#arrow').css({ position: 'relative', left: '0px' });
    $('#go-to-top').scrollTop(0);
 });