const connection = require('../database/connection');
const cryptPass = require('../utils/cryptPass');
module.exports = {

    async create(req, res){
        const { user_email, user_password } = req.body;
        const tmp_pass = cryptPass.encrypt(user_password);
          const user = await connection('tb_user')
              .where('user_email', user_email)
              .where('user_password', tmp_pass)
              .select('user_id','user_name','user_email')
              .first();
              if(!user){
                  return res.status(400).json({ error: "User not exists"})
              }
              return res.json(user);


    },
}
