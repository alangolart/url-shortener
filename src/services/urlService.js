const { nanoid } = require('nanoid')
const { createUrl, findSlug } = require('../repositories/index')
const urlConstants = require('../../constants/urlConstants')
const config = require('../../config/index')

async function urlShortener(body) {
  let { slug, url } = body
  if (url.includes(config.server.host)) return { status: 400, message: urlConstants.urlNotPermitted }
  if (!slug) {
    slug = nanoid(5)
  } else {
    const existingSlug = await findSlug(slug)
    if (existingSlug) {
      return { status: 400, message: urlConstants.slugInUse }
    }
  }
  slug = slug.toLowerCase()
  const created = await createUrl({ url, slug })
  return { status: 200, shortUrl: `${config.server.host}/${slug}` }
}

module.exports = {
  urlShortener,
}
