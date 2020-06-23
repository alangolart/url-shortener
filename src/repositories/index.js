const Url = require('../models/Url')

async function createUrl(url) {
  return Url.create(url)
}
async function findSlug(slug) {
  return Url.findOne({ slug })
}

module.exports = {
  createUrl,
  findSlug
}
