const db = require('../helpers/db');

// .catch((error) => handleError(res, error));
// const handleError = (res, error) => {
//     res.status(500).send(error.message);
// };
class UserController {

    async getUser(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT * FROM "user" where id = $1', [id]);
        res.json(user.rows[0]);
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM "user"');
        res.json(users.rows);
    }

    async createUser(req, res) {
        const {
            name,
            email,
            password,
            sex
        } = req.body;
        const newPerson = await db.query('INSERT INTO "user" (name, email, password, sex) values ($1 ,$2, $3, $4) RETURNING *', [name, email, password, sex]);
        res.json(newPerson.rows[0]);
    }

    async updateUser(req, res) {
        const {
            name,
            email,
            password,
            sex
        } = req.body;
        const id = req.params.id;
        const user = await db.query('UPDATE "user" set name = $2, email = $3, password = $4, sex = $5 WHERE id = $1 RETURNING *', [id, name, email, password, sex]);
        res.json(user.rows[0]);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM "user" where id = $1', [id]);
        res.json(user.rows[0]);
    }
}


module.exports = new UserController();