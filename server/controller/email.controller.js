const db = require('../db')

class EmailController {
    async createEmail(req, res){
        const {email} = req.body
        const newEmail = await db.query(`INSERT INTO email (email) values ($1) RETURNING *`, [email])
        res.json(newEmail)
    }
}

module.exports = new EmailController;