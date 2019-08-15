const request = require("request");
const cheerio = require("cheerio");

// Request Steam Top-Sellers List
request(
  "https://store.steampowered.com/search/?filter=topsellers",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      // Request and Print to Console Title of Game
      $(".title").each((i, el) => {
        const item = $(el).text();
        console.log(item);
      });

      // Request and Print to Console Title of Game
      $("div.col.search_price.responsive_secondrow").each((i, el) => {
        const barb = $(el).text();
        console.log(barb);
      });
    }
  }
);
