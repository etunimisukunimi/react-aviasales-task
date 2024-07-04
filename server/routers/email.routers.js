const Router = require('express')
const router = new Router()
const emailController = require('../controller/email.controller')

router.post('/create_email', emailController.createEmail)
router.get('/get_emails', emailController.getEmails)

module.exports = router;