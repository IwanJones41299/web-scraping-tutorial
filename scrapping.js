const axios = require("axios");
const cherrio = require("cheerio");

axios.get("https://www.jamesqquick.com/talks").then((res) => {

  const talks = [];

  const $ = cherrio.load(res.data);

  $('.card').each(  (index, element) => {
      const title = $(element).children('div[class="card--content"]').children('h3').text();
      const description = $(element).children('div[class="card--content"]').children('p').first().text();
      const date = $(element).children('div[class="card--content"]').children('p').last().text();
      const link = $(element).attr('href');
      talks[index] = { title, description, date, link }; 
  });

    console.log(talks);
});
