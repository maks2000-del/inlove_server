const db = require('../helpers/db');

class MemoryController {

    async getMemory(req, res) {
        try {
            const id = req.params.id;
            const memory = await db.query('SELECT * FROM "memory" where id = $1', [id]);
            res.json(memory.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async getMemorys(req, res) {
        try {
            const coupleId = req.params.coupleId;
            const memorys = await db.query('SELECT * FROM "memory" where couple_id = $1', [coupleId]);
            res.json(memorys.rows);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async createMemory(req, res) {
        try {
            const {
                coupleId,
                title,
                description,
                date,
                location,
                photosId
            } = req.body;
            const newMemory = await db.query('INSERT INTO "memory" (couple_id, title, description, memory_date, location, photos_id) values ($1 ,$2, $3, $4, $5, $6) RETURNING *', [coupleId, title, description, date, location, photosId]);
            res.json(newMemory.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async updateMemory(req, res) {
        try {
            const {
                title,
                description,
                memoryDate,
                location,
                photosId
            } = req.body;
            const id = req.params.id;
            const memory = await db.query('UPDATE "memory" set title = $2, description = $3, memory_date = $4, location = $5, photos_id = $6 WHERE id = $1 RETURNING *', [id, title, description, memoryDate, location, photosId]);
            res.json(memory.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async deleteMemory(req, res) {
        try {
            const id = req.params.id;
            const memory = await db.query('DELETE FROM "memory" where id = $1', [id]);
            res.json(memory.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }
}


module.exports = new MemoryController();