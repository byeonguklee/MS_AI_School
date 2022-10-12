$( document ).ready( function() {
    var jbOffset = $( 'ul' ).offset();
    $( window ).scroll( function() {
      if ( $(window).scrolltop() > jbOffset().top ) {
        $( '.ul' ).addClass( 'jbFixed' );
      }
      else {
        $( '.jbMenu' ).removeClass( 'jbFixed' );
      }
    });
  } );