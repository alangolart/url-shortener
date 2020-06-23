const { body, param, validationResult } = require('express-validator')

const urlValidation = () => {
  return [body('url').isURL()]
}
const slugValidation = () => {
  return [body('slug').optional().isSlug()]
}
const slugParamValidation = () => {
  return [param('slug').isSlug()]
}
const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }))
  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  urlValidation,
  slugValidation,
  slugParamValidation,
  validate,
}
