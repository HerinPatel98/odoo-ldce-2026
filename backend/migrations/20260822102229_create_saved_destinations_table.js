/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("saved_destinations", (table) => {
        table
            .integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");

        table
            .integer("city_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("cities")
            .onDelete("CASCADE");

        table.timestamp("saved_at").notNullable().defaultTo(knex.fn.now());

        table.primary(["user_id", "city_id"]);
    });
}

export function down(knex) {
    return knex.schema.dropTableIfExists("saved_destinations");
}