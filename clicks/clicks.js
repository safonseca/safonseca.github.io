/*global $*/
/*jslint sloppy:true, browser: true*/
$('h1.page-title').text('Such Amaze!');
$(window).on('click', function (e) {
    $('img.logo').css({left: e.clientX,
                       top: e.clientY});
    $('img.logo').toggleClass('rotated');
});
function randomMargin() {
    return Math.random() * 200 - 100;
}
setInterval(function () {
    $('.logo').css({
        'margin-left': randomMargin(),
        'margin-top': randomMargin()
    });
}, 200);