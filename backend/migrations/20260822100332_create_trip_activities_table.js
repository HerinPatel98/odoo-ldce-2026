/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("trip_activities", (table) => {
        table.increments("id").primary();

        table
            .integer("trip_stop_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("trip_stops")
            .onDelete("CASCADE");

        table
            .integer("activity_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("activities")
            .onDelete("RESTRICT");

        table.date("activity_date").notNullable();

        table.time("start_time").nullable();
        table.time("end_time").nullable();

        table.integer("sort_order").unsigned().notNullable().defaultTo(0);

        table.timestamps(true, true);

        table.index("trip_stop_id");
        table.index("activity_id");
        table.index("activity_date");
    });
}

export function down(knex) {
    return knex.schema.dropTableIfExists("trip_activities");
}