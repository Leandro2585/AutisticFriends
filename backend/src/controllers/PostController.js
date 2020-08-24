const connection = require('../database/connection');

module.exports = {
  async create(req, res){
    const { post_comment } = req.body;
    const post_image = req.file.filename;
    const post_user = req.headers.login;

    const response = await connection('tb_posts')
      .insert({
        post_image,
        post_comment,
        post_user
      })
  },
  async index(req, res){
    try{
      const response = await connection('tb_posts')
      .join('tb_user','tb_user.user_id', '=', 'tb_posts.post_user')
      .select('tb_posts.*', 'tb_user.user_name');

      return res.status(200).json(response);
    }catch(err){
      return res.status(400).json({ error: err });
    }

  },
  async like(req, res) {
    const { post_id } = req.params;
    try {
      const response = await connection('tb_posts')
        .where('post_id', post_id)
        .update(count(+1));
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}
