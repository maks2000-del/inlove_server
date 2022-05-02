const db = require('../helpers/db');

class MemoryController {

    async getMemory(req, res) {
        const id = req.params.id;
        const memory = await db.query('SELECT * FROM "memory" where id = $1', [id]);
        res.json(memory.rows[0]);
    }

    async getMemorys(req, res) {
        const memorys = await db.query('SELECT * FROM "memory"');
        res.json(memorys.rows);
    }

    async createMemory(req, res) {
        const {
            coupleId,
            title,
            description,
            memoryDate,
            location,
            photosId
        } = req.body;
        const newMemory = await db.query('INSERT INTO "memory" (couple_id, title, description, memory_date, location, photos_id) values ($1 ,$2, $3, $4, $5, $6) RETURNING *', [coupleId, title, description, memoryDate, location, photosId]);
        res.json(newMemory.rows[0]);
    }

    async updateMemory(req, res) {
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
    }

    async deleteMemory(req, res) {
        const id = req.params.id;
        const memory = await db.query('DELETE FROM "memory" where id = $1', [id]);
        res.json(memory.rows[0]);
    }
}


module.exports = new MemoryController();