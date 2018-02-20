const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const TrackerSchema = new Schema({
  last_update_date: { type: Date },
});

module.exports = mongoose.model('tracker', TrackerSchema);