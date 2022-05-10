const {
    stdout
} = require('nodemon/lib/config/defaults');
const db = require('../helpers/db');

// .catch((error) => handleError(res, error));
// const handleError = (res, error) => {
//     res.status(500).send(error.message);
// };
class UserController {

    async getUser(req, res) {
        try {
            const id = req.params.id;
            const user = await db.query('SELECT * FROM "user" where id = $1', [id]);
            res.json(user.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async getUserByName(req, res) {
        try {
            const name = req.params.name;
            const user = await db.query('SELECT * FROM "user" where name = $1', [name]);
            res.json(user.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async getUsers(req, res) {
        try {
            const users = await db.query(`
            select "user".id, "user".name from "user"
            EXCEPT (
            SELECT "user".id, "user".name
            FROM "user"
            INNER JOIN "couple" ON "user".id = "couple".boy_id where "couple".status = 'accepted' UNION
            SELECT "user".id, "user".name
            FROM "user"
            INNER JOIN "couple" ON "user".id = "couple".girl_id where "couple".status = 'accepted')
            `);
            res.json(users.rows);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }
    async createUser(req, res) {
        try {
            const {
                name,
                email,
                password,
                sex
            } = req.body;
            const newPerson = await db.query('INSERT INTO "user" (name, email, password, sex) values ($1 ,$2, $3, $4) RETURNING *', [name, email, password, sex]);

            let status;
            (newPerson.rows[0].id != undefined) ? status = 'registered': status = 'smt went wrong';
            const response = {
                "status": status
            };
            res.json(response);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async updateUser(req, res) {
        try {
            const {
                name,
                email,
                password,
                sex
            } = req.body;
            const id = req.params.id;
            const user = await db.query('UPDATE "user" set name = $2, email = $3, password = $4, sex = $5 WHERE id = $1 RETURNING *', [id, name, email, password, sex]);
            res.json(user.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            const user = await db.query('DELETE FROM "user" where id = $1', [id]);
            res.json(user.rows[0]);
        } catch (error) {
            res.status(506).send("bd error");
        }

    }

    async authUser(req, res) {
        try {
            const {
                email,
                password
            } = req.body;
            const user = await db.query('SELECT * FROM "user" where email = $1 AND password = $2', [email, password]);
            let isUserExist;
            user.rows.length == 1 ? isUserExist = true : isUserExist = false;
            //console.log(user.rows);
            const response = {
                "authStatus": isUserExist,
                "id": user.rows[0].id,
                "name": user.rows[0].name,
                "email": user.rows[0].email,
                "sex": user.rows[0].sex,
            };
            res.json(response);
        } catch (error) {
            console.log(error);
            res.status(506).send("bd error");
        }

    }
}


module.exports = new UserController();