const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const BrandSchema = new Schema({
  name: { type: String }
});

module.exports = mongoose.model('brand', BrandSchema);