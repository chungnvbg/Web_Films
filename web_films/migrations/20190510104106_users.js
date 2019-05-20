
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', function(table) {
       table.increments('id');
       table.string('username', 255).notNullable();
       table.text('password', 255).notNullable();
       table.string('role', 255).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable('users');
};

exports.config = { transaction: false };