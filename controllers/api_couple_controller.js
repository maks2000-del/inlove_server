const db = require('../helpers/db');

class CoupleController {

    async getCouple(req, res) {
        const id = req.params.id;
        const couple = await db.query('SELECT * FROM "couple" where id = $1', [id]);
        res.json(couple.rows[0]);
    }

    async createCouple(req, res) {
        const {
            boyId,
            girlId
        } = req.body;
        const newCouple = await db.query('INSERT INTO "couple" (boy_id, girl_id) values ($1 ,$2) RETURNING *', [boyId, girlId]);
        res.json(newCouple.rows[0]);
    }
}


module.exports = new CoupleController();