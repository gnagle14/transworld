$(function(){


  function headerResize() {
      var $wndwWdth = $(window).width(),
          $logoImg  = $('.logo img');

      if ( $wndwWdth < 1170 ) {
        // console.log('cahgne');
        $logoImg.attr('src', 'assets/icons/logo.svg');
      } else {
        $logoImg.attr('src', 'assets/icons/logo-1.svg');
      }
  }


  $(window).resize(headerResize);














});
