const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const { nanoid } = require('nanoid')

const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')

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

module.exports = app
