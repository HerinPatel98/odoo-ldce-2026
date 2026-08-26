/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("expenses", (table) => {
        table.increments("id").primary();

        table
            .integer("trip_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("trips")
            .onDelete("CASCADE");

        table
            .integer("trip_stop_id")
            .unsigned()
            .nullable()
            .references("id")
            .inTable("trip_stops")
            .onDelete("SET NULL");

        table
            .string("category", 50)
            .notNullable();

        table.decimal("amount", 12, 2).notNullable();

        table.string("description", 255).nullable();

        table.date("expense_date").nullable();

        table.timestamps(true, true);

        table.index("trip_id");
        table.index("trip_stop_id");
        table.index("category");
    });
}

export function down(knex) {
    return knex.schema.dropTableIfExists("expenses");
}