const axios = require('axios');
const chalk = require('chalk');
const log = console.log;

function getQuote() {
  return new Promise(function(resolve, reject) {
    axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then((response) => {
        resolve (response.data);
      } )
      .catch ((error) => {
        reject (error);
      })
    });
  }

function stupidPromise () {
    return new Promise ( (resolve, reject) => {
      if (Math.round(Math.random())) {
        log("resolving stupid promise");
        resolve("hello fulfilled promise")
      } else {
        log("rejecting stupid promise");
        reject("hello rejected promise")
      }
    })
}

function main() {
  getQuote()
    .then( (quote) => {
      log(chalk.yellow(quote));
    }).catch((error) => {
      log(chalk.red("Error :", error));
    })
  log("main after quote promise");

  let prom = stupidPromise();
  console.log("prom = ", prom);
  prom.then((stupid) => {
      console.log("prom in then = ", prom);
      log(chalk.yellow(stupid));
    })
    .catch((error) => {
      log(chalk.red("Error :", error));
    })
  log("main after stupid promise");
}

main();
log('Ron once said,');
