const connection = require('../database/connection');

module.exports = {
    async index(req, res){
        const queries_user = req.headers.login;
        const querie = await connection('tb_queries')
            .where('queries_user', queries_user)
            .select('*')
            return res.json(querie)
    },
    async indexNeuro(req, res){
        const queries_neuro = req.headers.authorization;
        const querie = await connection('tb_queries')
            .where('queries_neuro', queries_neuro)
            .select('*')
            return res.json(querie)
    },
    async create(req, res){
        const queries_neuro = req.headers.authorization;

        const queries_user = req.headers.login;

        const {
            queries_description,
            queries_date,
            queries_time
        } = req.body;

        if(!queries_neuro){
            return res.json("Id não reconhecido")
        }

        const response = await connection('tb_queries')
            .insert({
                queries_description,
                queries_date,
                queries_time,
                queries_user,
                queries_neuro
            });
        res.json({ response });
    }
}