class Config {
  constructor(
    contentParserFunc,
    dbSaveFunc,
    loggingFunc,
    url) {
    this.contentParserFunc = contentParserFunc;
    this.dbSaveFunc = dbSaveFunc;
    this.loggingFunc = loggingFunc;
    this.url = url;
  }
}
module.exports = Config;