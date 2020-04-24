const Sequelize = require('sequelize');
require('dotenv').config()

module.exports = {
    async store(req, res){
        const { first_name, last_name, email, password } = req.body;

        /* Code the input of the user in database. */
        /* The model of this input is 'models/user.js' */

        res.send(
            JSON.stringify(
                {
                    name: first_name + ' ' + last_name,
                    email: email
                }
            )
        );
    }
}