const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Doctor = new Schema(
  {
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('doctors', Doctor)