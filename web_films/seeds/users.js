const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, 
          username: 'admin',
          password:bcrypt.hashSync('123456', 10),
          role:'admin'
        }
      ]);
    });
};