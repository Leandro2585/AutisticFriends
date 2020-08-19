const connection = require('../database/connection');

module.exports = {
  async create(req, res){
    const { post_comment } = req.body;
    const post_user = req.headers.login;

    const response = await connection('tb_posts')
      .insert({
        post_image: req.file.filename,
        post_comment,
        post_user
      })
  },
  async index(req, res){
    try{
      const response = await connection('tb_posts')
      .join('tb_user','tb_user.user_id', '=', 'tb_posts.post_user')
      .select('tb_posts.*', 'tb_user.user_name');
      const serializedPost = response.map(item => {
        return {
          ...item,
          image_url: `http://192.168.1.34:3333/uploads/${item.post_image}`
        }
      })
      return res.status(200).json(serializedPost);
    }catch(err){
      return res.status(400).json({ error: err });
    }

  }
}
