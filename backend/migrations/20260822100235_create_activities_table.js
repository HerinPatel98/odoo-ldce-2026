/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("activities", (table) => {
        table.increments("id").primary();

        table
            .integer("city_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("cities")
            .onDelete("CASCADE");

        table.string("name", 150).notNullable();

        table.text("description").nullable();

        table.string("type", 100).nullable();

        table.decimal("cost", 10, 2).notNullable().defaultTo(0);

        table.integer("duration_minutes").unsigned().nullable();

        table.string("image", 500).nullable();

        table.timestamps(true, true);

        table.index("city_id");
        table.index("type");
    });
}

export function down(knex) {
    return knex.schema.dropTableIfExists("activities");
}