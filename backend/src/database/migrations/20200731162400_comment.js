
exports.up = function(knex) {
    return knex.schema.createTable('tb_comment', function(table){
        table.increments('comment_id').primary().notNullable();
        table.string('comment_post').notNullable();
        table.string('comment_content').notNullable();
        table.foreign('comment_post').references('post_id').inTable('tb_post'); 
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_comment');
};
