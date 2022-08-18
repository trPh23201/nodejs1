/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema
        .createTable('user', (table) => {
            table.increments();
            table.string('username', 20).notNullable().unique();
            table.string('password').notNullable();
            table.integer('role').defaultTo(0);
            table.timestamp('created').defaultTo(knex.fn.now());
            table.timestamp('updated').defaultTo(knex.fn.now());
            table.timestamp('lastLogin').defaultTo(knex.fn.now());
        })
        .createTable('post', (table) => {
            table.increments();
            table.integer('userId').references('id').inTable('user').onDelete('CASCADE').onUpdate('CASCADE');
            table.string('title');
            table.string('body', 1000);
            table.timestamp('created').defaultTo(knex.fn.now());
            table.timestamp('updated').defaultTo(knex.fn.now());
        })
        .createTable('comment', (table) => {
            table.increments();
            table.integer('postId').references('id').inTable('post').onDelete('CASCADE').onUpdate('CASCADE');
            table.string('username', 20);
            table.string('body', 1000);
            table.timestamp('created').defaultTo(knex.fn.now());
            table.timestamp('updated').defaultTo(knex.fn.now());
        })
        .createTable('refresh_token', (table) => {
            table.increments();
            table.string('token');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function (knex) {
    return knex.schema
        .raw('DROP TABLE if exists "user" cascade')
        .raw('DROP TABLE if exists "post" cascade')
        .raw('DROP TABLE if exists "comment" cascade')
        .raw('DROP TABLE if exists "token" cascade')
};

