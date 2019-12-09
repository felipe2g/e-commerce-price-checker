const sugestSearchTerms = require('../../utils/sugestSearchTerms');

module.exports = {
    async index(req, res){
        const term = await sugestSearchTerms(req.params.term);

        res.send(term);

    }
}