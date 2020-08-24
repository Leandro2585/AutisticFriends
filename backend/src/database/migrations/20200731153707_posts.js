exports.up = function(knex) {
  return knex.schema.createTable('tb_posts', function(table){
      table.increments('post_id').primary().notNullable();
      table.string('post_image');
      table.string('post_comment');
      table.string('post_user').notNullable();
      table.foreign('post_user').references('user_id').inTable('tb_user')
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable('tb_posts');
};
