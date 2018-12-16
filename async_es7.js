var request = require('request');
const chalk = require('chalk');
const axios = require('axios');

const log = console.log;
async function getQuote() {
    const response = await axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
    return response.data;
}

async function stupidPromise () {
  if (Math.round(Math.random())) {
      return("hello fulfilled promise");
      } 
  else {
    return Promise.reject("hello rejected promise");
  }
}

async function main() {
  try {
    var quote = await getQuote();
    log("main after quote promise");
    log(chalk.yellow(quote));
    var prom = await stupidPromise();
    log("prom = ", prom);
    log(chalk.yellow(prom));
  } 
  catch(error) {
    log(chalk.red("Error :", error));
  }
}

main();
log('Ron once said,');
