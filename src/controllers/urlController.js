const { urlShortener } = require('../services/urlService')

exports.postUrlShort = async (req, res, next) => {
  try {
    const response = await urlShortener(req.body)
    res.status(response.status || 200).json(response)
  } catch (error) {
    error.statusCode = 400
    next(error)
  }
}
