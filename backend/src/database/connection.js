// knex migrate:latest
// knex migrate:rollback
 
const config = require('../../knexfile');
const knex = require('knex')(config);


module.exports = knex;










//TASK

// exports.up = function(knex) {
//     return knex.schema.createTable('tb_task', function(table){
//         table.increments('task_id').primary()
//         table.string('task_description').notNullable()
//         table.time('task_time').notNullable()
//         table.integer('user_task').notNullable()
//         table.foreign('user_task').references('user_id').inTable('tb_user')
//     });
// };

// exports.down = function(knex) {
//     return knex.schema.dropTable('tb_task');
// };
