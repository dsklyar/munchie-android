const phantom = require('phantom');

function Scrape(config) {
  var _ph, _page, _result = [];
  phantom.create()
    .then(ph => { _ph = ph; return _ph.createPage(); })
    .then(page => { _page = page; return _page.open(config.url); })
    .then(status => { console.log(`Site returned with ${status} status`); return _page.property('content'); })
    .then(content => { return config.contentParserFunc(content); })
    .then(product_list => { if(config.loggingFunc){config.loggingFunc(product_list);} return config.dbSaveFunc(product_list); })
    .then(finish => { _page.close(); _ph.exit(); })
    .catch(e => console.log(e));
} 
module.exports = Scrape;