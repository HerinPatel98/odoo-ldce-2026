/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("trips", (table) => {
        table.increments("id").primary();

        table
            .integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");

        table.string("name", 150).notNullable();

        table.text("description").nullable();

        table.date("start_date").notNullable();
        table.date("end_date").notNullable();

        table.string("cover_photo", 500).nullable();

        table.boolean("is_public").notNullable().defaultTo(false);

        table.timestamps(true, true);

        table.index("user_id");
    });
}

export function down(knex) {
    return knex.schema.dropTableIfExists("trips");
}