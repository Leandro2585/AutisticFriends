
exports.up = function(knex) {
    return knex.schema.createTable('tb_task', function(table){
        table.increments('task_id').primary()
        table.string('task_title').notNullable()
        table.string('task_description').notNullable()
        table.time('task_time').notNullable()
        table.string('user_id').notNullable()
        table.foreign('user_id').references('user_id').inTable('tb_user')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_task');
   
};
