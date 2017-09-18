'use strict';

//https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=1&apikey=A3TA0LD68V738WP7

const key = 'A3TA0LD68V738WP7';
const url = new URL('https://www.alphavantage.co/query');

const getStockData = function(symbol) {
  const query = {
    function: 'TIME_SERIES_DAILY',
    symbol: symbol.toUpperCase(),
    outputsize: 'compact',                 // minimum amt of data
    apikey: key
  };

  Object.keys(query).forEach(key => {
    url.searchParams.append(key, query[key]);
  });
  console.log(url);
  return fetch(url)
    .then(function(res) {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    });
};

