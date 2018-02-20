const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String },
  calories: { type: Number },
  price: { type: Number },
  img_url: { type: String },
  type: { type: String }, //can be drinks,burito, burgers, etc
  brand_id: { type: Schema.Types.ObjectId, ref: 'brand' }
});

ItemSchema.pre('save', function (next) {
  var self = this;
  ItemModel.find({
    name: self.name
  }, function (err, docs) {
    if (!docs.length) {
      next();
    } else {
      //console.log('item exists: ', self.name);
      //next(new Error("Item exists!"));
    }
  })
})

ItemModel = mongoose.model('item', ItemSchema);
module.exports = ItemModel;