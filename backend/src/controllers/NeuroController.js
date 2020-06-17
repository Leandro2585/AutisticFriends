const connection = require('../database/connection');
const GeradorId = require('../utils/generateId');
const cryptPass = require('../utils/cryptPass');
module.exports = {

    async create(req, res){
        const {
            neuro_crm,
            neuro_name,
            neuro_tel,
            neuro_email } = req.body;

        let { neuro_password } = req.body;
        let tmp_pass = neuro_password
        neuro_password = cryptPass.criptografar(tmp_pass);

        const neuro_id = GeradorId();
        try {
            const response = await connection('tb_neuro').insert({
                neuro_id,
                neuro_crm,
                neuro_name,
                neuro_tel,
                neuro_email,
                neuro_password
            });

            return res.json({ message: "ok" })
        } catch (error) {
            return res.json(`ERROR: ${error}`);
        }
    }
}
