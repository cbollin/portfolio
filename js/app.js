$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['Home', 'Skills', 'Projects', 'Timeline', 'Contact'],
        sectionsColor: ['#E0EBE8', '#48A9A6', '#a3d4d2', '#819BD1', '#333'],
        scrollOverflow: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Skills', 'Projects', 'Timeline']
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
});
