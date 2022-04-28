const db = require('../helpers/db');

// .catch((error) => handleError(res, error));
// const handleError = (res, error) => {
//     res.status(500).send(error.message);
// };
class UserController {

    async getUser(req, res) {
        const {
            name,
            email,
            password,
            sex
        } = req.body;
        const newPerson = await db.query('INSERT INTO "user" (name, email, password, sex) values ($1 ,$2, $3, $4) RETURNING *', [name, email, password, sex]);
        res.json(newPerson.rows[0]);
    }

    async getUsers(req, res) {

    }

    async createUser(req, res) {

    }

    async updateUser(req, res) {

    }

    async deleteUser(req, res) {

    }
}


module.exports = new UserController();