const fs = require('fs'),
  phantom = require('phantom'),
  jsdom = require("jsdom"),
  { JSDOM } = jsdom,
  Item = require('../models/item.model');

function Scrape() {
  console.log(`pretending to be scraping web and saving data in logs/data.json`);
  var _ph, _page, _result = [];
  phantom.create()
    .then(ph => { _ph = ph; return _ph.createPage(); })
    .then(page => { _page = page; return _page.open('https://www.tacobell.com/food'); })
    .then(status => { console.log(status); return _page.property('content'); })
    .then(content => {

      var product_list = new JSDOM(content.toString()).window.document.querySelectorAll('li.product-tile.standard');
      product_list.forEach(i => {
        var name = i.children[0].textContent.trim();
        var calories = i.children[1].children[0].textContent.trim();
        var price = i.children[1].children[1].textContent.trim();
        var o = {
          name,
          calories,
          price
        }
        new Item({
          name,
          calories : calories.slice(0,-4),
          price: price.substring(1, price.length)
        }).save();
        _result.push(o);
      });

      fs.writeFile("./logs/test.json", JSON.stringify(_result, null, 2), function (err) {
        if (err) { return console.log(err); }
        console.log("The file was saved!");
      });
      _page.close();
      _ph.exit();
    }).catch(e => console.log(e));
}
module.exports = Scrape;