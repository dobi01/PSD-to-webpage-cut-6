var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Flickity = require('flickity');

// make Flickity a jQuery plugin
Flickity.setJQuery( $ );
jQueryBridget( 'flickity', Flickity, $ );

window.onload = function() {

  // CAROUSELS
  const $carousel = $('.carousel').flickity({
    prevNextButtons: false,
    pageDots: false
  });

  // Flickity instance
  const flkty = $carousel.data('flickity');
  // elements
  const $cellButtonGroup = $('.button-group--cells');
  const $cellButtons = $cellButtonGroup.find('.button');
  
  // update selected cellButtons
  $carousel.on( 'select.flickity', function() {
    $cellButtons.filter('.is-selected')
      .removeClass('is-selected');
    $cellButtons.eq( flkty.selectedIndex )
      .addClass('is-selected');
  });
  
  // select cell on button click
  $cellButtonGroup.on( 'click', '.button', function() {
    const index = $(this).index();
    $carousel.flickity( 'select', index );
  });


  // INPUTS
  const $button = $('[data-name]');

  $button.on('click', function(e) {
    e.preventDefault();
    const parent = $(this).parent(),
        input = parent.find('.input__item'),
        valString = input.val(),
        data = $(this).data('name');

    let valInt = parseInt(valString);
    
    data == 'increment' ? valInt += 1 : valInt -= 1;
    valInt <= 0 ? valInt = 0 : valInt;

    input.val(valInt);
  });
};
