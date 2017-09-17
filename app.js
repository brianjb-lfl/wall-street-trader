'use strict';

let appState;         // front, main, quote, portfolio

function frontPgHandler() {
  $('#login-form').on('click', '#login-submit-btn', event => {
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

function quotePgHandler() {
  $('#quote-page').on('click', '#quote-exit-btn', event => {
    appState = 'main';
    render();
  });
}

function portfolioPgHandler() {
  $('#portfolio-page').on('click', '#portfolio-exit-btn', event => {
    appState = 'main';
    render();
  });
}


function handleWSTApp() {
  frontPgHandler();
  mainPortfolioBtnHandler();
  mainQuoteBtnHandler();
  quotePgHandler();
  portfolioPgHandler();
  appState = 'front';
  render();
}



$(handleWSTApp);