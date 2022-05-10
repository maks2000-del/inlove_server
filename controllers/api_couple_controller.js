const db = require('../helpers/db');

class CoupleController {

    async getCouple(req, res) {
        const id = req.params.id;
        try {
            const couple = await db.query('SELECT * FROM "couple" where id = $1', [id]);

            if (couple.rows.length === 1) {
                res.json(couple.rows[0]);
            } else {
                res.status(506).send("bd error");
            }
        } catch (error) {
            res.status(505).send(error);
        }

    }

    async getCoupleByUserId(req, res) {
        try {
            const userId = req.params.userId;
            const couple = await db.query('SELECT * FROM "couple" where boy_id = $1 OR girl_id =$1', [userId]);
            if (couple.rows.length === 0) {
                res.status(404).send('no couple with this user');
            } else {
                res.json(couple.rows[0]);
            }
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async createCouple(req, res) {
        try {
            const {
                boyId,
                girlId,
                status
            } = req.body;
            const newCouple = await db.query('INSERT INTO "couple" (boy_id, girl_id, status) values ($1 ,$2, $3) RETURNING *', [boyId, girlId, status]);
            res.json(newCouple.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async updateCouple(req, res) {
        try {
            const {
                status
            } = req.body;
            const id = req.params.id;
            const newCouple = await db.query('UPDATE "couple" set status = $2 WHERE id = $1 RETURNING *', [id, status]);
            res.json(newCouple.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }
}


module.exports = new CoupleController();