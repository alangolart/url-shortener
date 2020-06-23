const mongoose = require('mongoose')

const { Schema } = mongoose
const urlSchema = new Schema(
  {
    slug: {
      type: String,
      // minlength: 3,
      required: true,
      unique: true,
      // lowercase: true,
      trim: true,
    },
    url: {
      type: String,
      // minlength: 3,
      required: true,
      // lowercase: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Url', urlSchema)
