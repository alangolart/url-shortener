const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')
const rateLimit = require('express-rate-limit')

const config = require('./config/index')

const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')
const urlRouter = require('./routes/url')

const MONGODB_URI = `mongodb+srv://${config.db.user}:${config.db.pass}@${config.db.host}/${config.db.name}?authSource=admin`

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
})

const app = express()

app.use(morgan('common'))
app.use(helmet())
app.use(limiter)

app.use(express.json())

app.use('/', urlRouter)

app.use(notFound)
app.use(errorHandler)


mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log(`Connected to ${config.db.name}`)
  })
  .catch((error) => {
    console.log(error)
  })

module.exports = app
