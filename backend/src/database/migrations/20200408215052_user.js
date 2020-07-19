exports.up = function(knex) {
    return knex.schema.createTable('tb_user', function(table){
        table.string('user_id').primary().notNullable();
        table.string('user_name').notNullable();
        table.string('user_email').notNullable().unique();
        table.string('user_password').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_user')
};
