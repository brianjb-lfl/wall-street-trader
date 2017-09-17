'use strict';


function render() {
  setPages();
}

function setPages() {
  $('.page').addClass('hidden');

  switch(appState){
    case 'front':
      $('#front-page').removeClass('hidden');
      break;
    case 'main':
      $('#main-page').removeClass('hidden');
      break;
    case 'quote':
      $('#quote-page').removeClass('hidden');
      break;
    case 'portfolio':
      $('#portfolio-page').removeClass('hidden');
  }
}
