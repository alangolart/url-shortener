const { urlShortener, urlRedirect } = require('../services/urlService')

exports.getUrlRedirect = async  (req, res, next) => {
  try {
    const response = await urlRedirect(req.params)
    if (response.url) {
      res.redirect(response.url)
    }
    res.status(response.status || 400).json(response)
  } catch (error) {
    error.statusCode = 400
    next(error)
  }
}

exports.postUrlShort = async (req, res, next) => {
  try {
    const response = await urlShortener(req.body)
    res.status(response.status || 200).json(response)
  } catch (error) {
    error.statusCode = 400
    next(error)
  }
}
