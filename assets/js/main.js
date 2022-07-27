$('.nav-toggle-btn').click(function(){
    $('.app-page-container').toggleClass('side-menu-closed');
    $('#contentManagement').removeClass('show');
});

$('.side-menu .nav-list li button.nav-item').click(function(){
    $('.app-page-container').addClass('side-menu-closed');
    width = document.body.clientWidth;
    if (width > 1199) {
        $('.app-page-container').removeClass('side-menu-closed');
    }
});
