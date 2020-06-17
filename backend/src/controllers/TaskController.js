const connection = require('../database/connection');
module.exports = {

    async index(req, res){


        const user_id = req.headers.login;
        const [count] = await connection('tb_task').count();


        const response = await connection('tb_task')
        .join('tb_user','tb_user.user_id', '=', 'tb_task.user_id')
        .where('tb_user.user_id', user_id)
        .select('tb_task.*', 'user_name');
        
        res.header('X-Total-Count', count['count(*)']);
        return res.json(response);

    },
    async create(req, res){

        const { 
            task_description,
            task_time, } = req.body;

        const user_id = req.headers.login;

        const neuro_id = req.headers.authorization;

        if(!neuro_id){
            return res.send({ message: "You doesn't permission"})
        }
        
        const response = await connection('tb_task')
            .insert({
                task_description,
                task_time,
                user_id, 
            })
        res.json({ response })
    }
}