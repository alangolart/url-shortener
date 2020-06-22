const app = require('./app')
const config = require('./config/index')

try {
  app.listen(config.server.port || 3047)
  console.log(`🚀 Listening on port ${config.server.port}`)
} catch (error) {
  error.statusCode = 400
  // eslint-disable-next-line no-undef, no-unreachable
  next(error)
}
