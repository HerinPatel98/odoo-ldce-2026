/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("cities", (table) => {
        table.increments("id").primary();

        table.string("name", 100).notNullable();
        table.string("country", 100).notNullable();
        table.string("region", 100).nullable();

        table.text("description").nullable();

        table.integer("cost_index").unsigned().nullable();
        table.integer("popularity").unsigned().nullable();

        table.string("image", 500).nullable();

        table.decimal("latitude", 10, 7).nullable();
        table.decimal("longitude", 10, 7).nullable();

        table.timestamps(true, true);
    });
}

export function down(knex) {
    return knex.schema.dropTableIfExists("cities");
}