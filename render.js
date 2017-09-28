'use strict';

/* global appState */

function render() {
  console.log('render');
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

function renderQuote(quoteObj, quoteSym) {
  let quoteHtml = 
  `
    <li><h4>${quoteSym}</h4></li>
    <li>Current:  ${quoteObj['4. close'].slice(0,-2)}</li>
    <li>Open:  ${quoteObj['1. open'].slice(0, -2)}</li>
    <li>High:  ${quoteObj['2. high'].slice(0, -2)}</li>
    <li>Low:  ${quoteObj['3. low'].slice(0, -2)}</li>
    <li>Volume:  ${Number(quoteObj['5. volume']).toLocaleString()}</li>`;
  $('#quote-text').html(quoteHtml);
  $('#quote-display').removeClass('hidden');
  $('#symbol-input').val('');
}
// this is a change
