const connection = require('../database/connection');
const GeradorId = require('../utils/generateId');
const cryptPass = require('../utils/cryptPass');

module.exports = {

    async index(req, res){
        const { neuro_id } = req.headers.authorization;
        if(neuro_id !== undefined || neuro_id !== null){
          const response = await connection('tb_user')
                  .select('*');
          return res.json(response);
        }
        else{
          return res.json({ message: "Você não tem permissão para acessar essa página!"});
        }
    },
    async create(req, res){
        const {
            user_name,
            user_email,
            user_tel } = req.body;
        let { user_password } = req.body;
        let tmp_pass = user_password
        user_password = cryptPass.criptografar(tmp_pass);
        const user_id = GeradorId();
        try{
            const response = await connection('tb_user').insert({
                user_id,
                user_name,
                user_tel,
                user_email,
                user_password,
            });
            return res.json({ message: "ok" });
        }catch(error){
            return res.json(`ERRO: ${error}`);
        }
    }
}
