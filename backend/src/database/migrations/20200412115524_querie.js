
exports.up = function(knex) {
    return knex.schema.createTable('tb_queries', function(table){
        table.increments('queries_id').primary().notNullable()
        table.string('queries_description').notNullable()
        table.date('queries_date').notNullable()
        table.time('queries_time').notNullable()
        table.string('queries_user').notNullable()
        table.string('queries_neuro').notNullable()
        table.foreign('queries_user').references('user_id').inTable('tb_user')
        table.foreign('queries_neuro').references('neuro_id').inTable('tb_neuro')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_queries');  
};
