// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import $ from 'jquery';
global.jQuery = $;
global.$ = $;

<<<<<<< HEAD
$(function () {
	(function responsiveNav () {
	  let btn = $('#menu-btn');
	  let nav = $('.account-menu');
	  let overlay = $('.overlay');

	  btn.on('click', function () {
      nav.addClass('account-menu--active');
      overlay.addClass('overlay--active');
      // $(this).attr('disabled', true);
	  });

	  overlay.on('click', function () {
      nav.removeClass('account-menu--active');
      overlay.removeClass('overlay--active');
      // btn.removeAttr('disabled');
	  })
	})();

	// select
		$("#select-box").on("click" , function() {
	  $(this).parent(".select-wrap").toggleClass("open");  
	});

	$(document).mouseup(function (e){
	  const container = $(".select-wrap");
	  if (container.has(e.target).length === 0){
	    container.removeClass("open");
	  }
	});

	$("#select-box").on("change" , function() {
	  const selection = $(this).find("option:selected").text(),
	      labelFor = $(this).attr("id"),
	      label = $("[for='" + labelFor + "']");
	  label.find(".label-desc").html(selection);
	    
	});

})
=======
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
>>>>>>> db61a55f9044a2ddbc0a26ba1133e4d7e014743f
