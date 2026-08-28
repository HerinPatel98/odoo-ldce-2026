/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("trip_shares", (table) => {
        table.increments("id").primary();

        table
            .integer("trip_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("trips")
            .onDelete("CASCADE");

        table.string("share_token", 100).notNullable().unique();

        table.boolean("is_active").notNullable().defaultTo(true);

        table.timestamps(true, true);

        table.index("trip_id");
    });
}

export function down(knex) {
    return knex.schema.dropTableIfExists("trip_shares");
}