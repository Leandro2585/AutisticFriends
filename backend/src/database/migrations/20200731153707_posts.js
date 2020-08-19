exports.up = function(knex) {
  return knex.schema.createTable('tb_posts', function(table){
      table.increments('post_id').primary().notNullable();
      table.string('post_image').notNullable();
      table.string('post_comment').notNullable();
      table.string('post_likes');
      table.string('post_user').notNullable();
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      table.foreign('post_user').references('user_id').inTable('tb_user')
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable('tb_posts');
};
