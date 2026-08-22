/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("users", function (table) {
        table.increments("id").primary();

        table.string("name", 100).notNullable();

        table.string("email", 255).notNullable().unique();

        table.string("password_hash", 255).notNullable();

        table.string("profile_photo", 500).nullable();

        table.timestamps(true, true);
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists("users");
}