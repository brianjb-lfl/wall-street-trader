'use strict';

/* global render, getStockData, renderQuote */

let appState;         // front, main, quote, portfolio

function frontPgHandler() {
  $('#login-form').on('submit', event => {
    event.preventDefault();
    console.log('runing front page handler');
    appState = 'main';
    render();
  });
}

function mainPortfolioBtnHandler() {
  $('#portfolio-value-disp').on('click', '#view-portfolio-btn', event => {
    appState = 'portfolio';
    render();
  });
}

function mainQuoteBtnHandler() {
  $('#cash-balance-disp').on('click', '#goto-quote-btn', event => {
    appState = 'quote';
    render();
  });
}

function quotePgGetQuoteHandler() {
  $('#get-quote-form').on('submit', event => {
    event.preventDefault();
    return getStockData($('#symbol-input').val())
      .then(res => {
        console.log(res);
        const maxDate = (Object.keys(res['Time Series (Daily)']).sort ( (a, b) => b - a)[0]);
        renderQuote(res['Time Series (Daily)'][maxDate], res['Meta Data']['2. Symbol']);
      });
  });
}

function quotePgExitHandler() {
  $('#quote-page').on('click', '#quote-exit-btn', event => {
    appState = 'main';
    $('#quote-display').addClass('hidden');
    render();
  });
}

function portfolioPgExitHandler() {
  $('#portfolio-page').on('click', '#portfolio-exit-btn', event => {
    appState = 'main';
    render();
  });
}


function handleWSTApp() {
  frontPgHandler();
  mainPortfolioBtnHandler();
  mainQuoteBtnHandler();
  quotePgGetQuoteHandler();
  quotePgExitHandler();
  portfolioPgExitHandler();
  appState = 'front';
  render();
}



$(handleWSTApp);