// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

console.log("its work");
// $(function () {
    

    (function responsiveNav () {
        let btn = $('#menu-btn');
        let nav = $('account-menu ');
        let overlay = $('.overlay');

        btn.on('click', function () {
            nav.addClass('account-menu--active');
            overlay.addClass('overlay--active');
            $(this).attr('disabled', true);
        });

        overlay.on('click', function () {
            nav.removeClass('nav--active');
            overlay.removeClass('overlay--active');
            btn.removeAttr('disabled');
        })
    })();
    
// })