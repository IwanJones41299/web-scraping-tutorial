const axios = require("axios");
const cherrio = require("cheerio");

axios.get("https://www.jamesqquick.com/talks").then((res) => {

  const talks = [];

  const $ = cherrio.load(res.data);

  $('.card--content').each(  (index, element) => {
      const title = $(element).children('h3').last().text();
      const description = $(element).children('p').first().text();
      const date = $(element).children('p').last().text();
      talks[index] = { title, description, date }; 
  });

    console.log(talks);
});
