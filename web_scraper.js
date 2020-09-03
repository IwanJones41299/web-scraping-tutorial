const request = require('request');
const cheerio = require('cheerio');
const { html } = require('cheerio');

request('https://www.jamesqquick.com/talks/', (error, response, html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        const siteHeader = $('.nav-brand');

        console.log(siteHeader.text());
    }
});