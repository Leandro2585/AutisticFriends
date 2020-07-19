
exports.up = function(knex) {
    return knex.schema.createTable('tb_queries', function(table){
        table.increments('queries_id').primary().notNullable()
        table.string('queries_description').notNullable()
        table.date('queries_date').notNullable()
        table.time('queries_time').notNullable()
        table.string('queries_user').notNullable()
        table.foreign('queries_user').references('user_id').inTable('tb_user')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_queries');
};
