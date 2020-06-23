const router = require('express').Router()
const urlController = require('../src/controllers/urlController')
const { urlValidation, slugValidation, validate } = require('../helpers/validator')

router.post('/create', urlValidation(), slugValidation(), validate, urlController.postUrlShort)

module.exports = router
