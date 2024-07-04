const db = require('../db')

class EmailController {

    async createEmail(req, res) {
        const { email } = req.body
        const newEmail = await db.query(`INSERT INTO email (email) values ($1) RETURNING *`, [email])
        res.json(newEmail)
    }

    async getEmails(req, res) {
        const emails = await db.query('SELECT * FROM email')
        res.json(emails.rows)
    }

}

module.exports = new EmailController;