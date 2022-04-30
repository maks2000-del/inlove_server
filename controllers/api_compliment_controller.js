class ComplimentController {

    async getCompliment(req, res) {
        const id = req.params.id;
        const compliment = await db.query('SELECT * FROM "compliment" where id = $1', [id]);
        res.json(compliment.rows[0]);
    }

    async createCompliment(req, res) {
        const {
            coupleId,
            date,
            text
        } = req.body;
        const newCompliment = await db.query('INSERT INTO "compliment" (couple_id, show_date, compliment_text) values ($1 ,$2, $3) RETURNING *', [coupleId, date, text]);
        res.json(newCompliment.rows[0]);
    }
}


module.exports = new ComplimentController();