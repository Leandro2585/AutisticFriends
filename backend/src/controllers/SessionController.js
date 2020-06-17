const connection = require('../database/connection');
const cryptPass = require('../utils/cryptPass');

module.exports = {
    async SessionNeuro(req, res){
        const { neuro_email, neuro_password } = req.body;

        const tmp_pass_neuro = cryptPass.descriptografar(neuro_password);

        const neuro = await connection('tb_neuro')
            .where('neuro_email', neuro_email)
            .where('neuro_password', tmp_pass_neuro)
            .select('neuro_id','neuro_crm','neuro_name', 'neuro_tel', 'neuro_email')
            .first();
        if(!neuro){
            return res.status(400).json({ error: "No neuro found with this email or password"})
        }
        return res.json(neuro);
    },
    async SessionUser(req, res){

        const { user_email, user_password } = req.body;

        const tmp_pass_user = cryptPass.descriptografar(user_password);

        const user = await connection('tb_user')
            .where('user_email', user_email)
            .where('user_password', tmp_pass_user)
            .select('user_id','user_name','user_tel','user_email')
            .first();
        if(!user){
            return res.status(400).json({ error: "No user found with this email or password"})
        }
        return res.json(user);
    }
}
