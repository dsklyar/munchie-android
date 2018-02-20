function content_parser_func(content) {
  const jsdom = require("jsdom"),
      { JSDOM } = jsdom;
  var product_list = [];
  new JSDOM(content.toString()).window.document.querySelectorAll('li.product-tile.standard').forEach(i => {
    product_list.push({
      name: i.children[0].textContent.trim(),
      calories: i.children[1].children[0].textContent.trim(),
      price: i.children[1].children[1].textContent.trim(),
      img_src: i.children[0].children[0].children[0].src
    });
  });
  return product_list;
}
function db_save_func(product_list) {
  const Item = require('../../models/item.model');
  product_list.map(i => {
    new Item({
      name: i.name,
      calories: i.calories.slice(0, -4),
      price: i.price.substring(1, i.price.length),
      img_url: i.img_url
    }).save();
  });
}
function logging_func(product_list){
  const fs = require('fs');
  fs.writeFile("./logs/tacoBell.json", JSON.stringify(product_list, null, 2), function (err) {
    if (err) { return console.log(err); }
    console.log("The file was saved!");
  });
}
const Config = require('../config');
module.exports = new Config(content_parser_func,db_save_func,logging_func,'https://www.tacobell.com/food');