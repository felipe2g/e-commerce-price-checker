const axios = require('axios');
const parse5 = require('parse5');

module.exports = async function(productId) {
    await axios.get(productId)
    .then(function (response) {
        return response.data;
    });
}