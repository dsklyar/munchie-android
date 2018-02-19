const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type : String },
  calories: { type : Number },
  price: { type : Number }
});

ItemSchema.pre('save', function(next){
  var self = this;
  ItemModel.find({
    name: self.name,
    calories: self.calories
  }, function(err,docs) {
    if (!docs.length){
      next();
    } else {                
      //console.log('item exists: ', self.name);
      next(new Error("Item exists!"));
    }
  })
})

ItemModel = mongoose.model('item', ItemSchema);
module.exports = ItemModel;