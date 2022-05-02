const db = require('../helpers/db');

class DateController {

    async getDate(req, res) {
        const id = req.params.id;
        const date = await db.query('SELECT * FROM "special_date" where id = $1', [id]);
        res.json(date.rows[0]);
    }

    async getDates(req, res) {
        const dates = await db.query('SELECT * FROM "special_date"');
        res.json(dates.rows);
    }

    async createDate(req, res) {
        const {
            coupleId,
            title,
            actionDate,
            bgColorId
        } = req.body;
        const newDate = await db.query('INSERT INTO "special_date" (couple_id, title, action_date, bg_color_id) values ($1 ,$2, $3, $4) RETURNING *', [coupleId, title, actionDate, bgColorId]);
        res.json(newDate.rows[0]);
    }

    async updateDate(req, res) {
        const {
            title,
            actionDate,
            bgColorId
        } = req.body;
        const id = req.params.id;
        const date = await db.query('UPDATE "special_date" set title = $2, action_date = $3, bg_color_id = $4 WHERE id = $1 RETURNING *', [id, title, actionDate, bgColorId]);
        res.json(date.rows[0]);
    }

    async deleteDate(req, res) {
        const id = req.params.id;
        const date = await db.query('DELETE FROM "special_date" where id = $1', [id]);
        res.json(date.rows[0]);
    }
}


module.exports = new DateController();