const db = require('../helpers/db');

class ComplimentController {

    async getCompliment(req, res) {
        try {
            const id = req.params.id;
            const compliment = await db.query('SELECT * FROM "compliment" where id = $1', [id]);
            res.json(compliment.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async getComplimentByCoupleId(req, res) {
        try {
            const id = req.params.id;
            const date = req.params.date;
            const recipent = req.params.recipent;
            const compliment = await db.query('SELECT * FROM "compliment" where couple_id = $1 and show_date = $2 and recipent = $3', [id, date, recipent]);
            res.json(compliment.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async createCompliment(req, res) {
        try {
            const {
                coupleId,
                date,
                text,
                recipent,
            } = req.body;
            const newCompliment = await db.query('INSERT INTO "compliment" (couple_id, show_date, compliment_text, recipent) values ($1 , $2 , $3, $4) RETURNING *', [coupleId, date, text, recipent]);
            res.json(newCompliment.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }
}


module.exports = new ComplimentController();