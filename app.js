const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')
const rateLimit = require('express-rate-limit')
const { nanoid } = require('nanoid')

const config = require('./config/index')

const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')
const { nextTick } = require('process')

const MONGODB_URI = `mongodb+srv://${config.db.user}:${config.db.pass}@${config.db.host}/${config.db.name}?authSource=admin`

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 100 requests per windowMs
})

const app = express()

app.use(morgan('common'))
app.use(helmet())
app.use(limiter)

app.use(express.json())

app.use(notFound)
app.use(errorHandler)

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Connected to ${config.db.name}`)
  })
  .catch((error) => {
    next(error)
  })

module.exports = app
