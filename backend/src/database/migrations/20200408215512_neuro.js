exports.up = function(knex) {
    return knex.schema.createTable('tb_neuro', function(table){
        table.string('neuro_id').primary().notNullable();
        table.string('neuro_crm').notNullable().unique();
        table.string('neuro_name').notNullable();
        table.string('neuro_tel').notNullable();
        table.string('neuro_email').notNullable().unique();
        table.string('neuro_password').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_neuro');
};
