const errorHandler = (error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500
  const { message } = error
  const { data } = error
  return res.status(status).json({ message, data })
}

module.exports = errorHandler
