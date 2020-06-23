const router = require('express').Router()
const urlController = require('../src/controllers/urlController')
const { urlValidation, slugValidation, slugParamValidation, validate } = require('../helpers/validator')

router.get('/:slug', slugParamValidation(), validate, urlController.getUrlRedirect)
router.post('/create', urlValidation(), slugValidation(), validate, urlController.postUrlShort)

module.exports = router
