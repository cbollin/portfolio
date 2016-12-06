$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['Home', 'Skills', 'Projects', 'Timeline'],
        sectionsColor: ['#E0EBE8', '#48A9A6', '#C1666B', '#98C183'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Skills', 'Projects', 'Timeline']
    });
});
