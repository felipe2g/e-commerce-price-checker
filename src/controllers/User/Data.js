const Sequelize = require('sequelize');
require('dotenv').config()

module.exports = {
    async store(req, res){
        const {cpf, gender, birth, cep, street, number, neighborhood, city, state, country, home, mobile, marketing} = req.body;

        /* Code the input of the user in database. */
        /* The model of this input is 'models/userdata.js' */

        res.send(
            JSON.stringify(
                {
                    cpf,
                    gender,
                    birth,
                    "adress":{
                        cep,
                        street,
                        number,
                        neighborhood,
                        city,
                        state,
                        country
                    },
                    "contact": {
                        home,
                        mobile,
                    },
                    marketing
                }
            )
        );
    }
}