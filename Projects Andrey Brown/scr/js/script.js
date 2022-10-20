$(document).ready(function () {
    $('.row-menu__hidden-menu').click(function (event) {
        $('.row-menu__hidden-menu,.row-menu__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
