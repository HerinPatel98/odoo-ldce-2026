/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("trip_stops", (table) => {
        table.increments("id").primary();

        table
            .integer("trip_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("trips")
            .onDelete("CASCADE");

        table
            .integer("city_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("cities")
            .onDelete("RESTRICT");

        table.date("start_date").notNullable();
        table.date("end_date").notNullable();

        table.integer("stop_order").unsigned().notNullable();

        table.timestamps(true, true);

        table.index("trip_id");
        table.index("city_id");

        table.unique(["trip_id", "stop_order"]);
    });
}

export function down(knex) {
    return knex.schema.dropTableIfExists("trip_stops");
}