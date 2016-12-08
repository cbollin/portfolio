$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['Home', 'Skills', 'Projects', 'Timeline'],
        sectionsColor: ['#E0EBE8', '#48A9A6', '#C1666B', '#98C183'],
        scrollOverflow: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Skills', 'Projects', 'Timeline']
    });
    $('[data-toggle="tooltip"]').tooltip();
});
$("i").hover(
    function() {
        $(this).stop().animate({
            "opacity": ".5"
        }, "fast");
    },
    function() {
        $(this).stop().animate({
            "opacity": "1"
        }, "slow");
    });
$(".gif").hover(
    function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.png$/i, ".gif"));
    },
    function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.gif$/i, ".png"));
    });
