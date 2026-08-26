/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("password_resets", (table) => {
        table.increments("id").primary();

        table
            .integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");

        table.string("token", 255).notNullable().unique();

        table.timestamp("expires_at").notNullable();

        table.boolean("used").notNullable().defaultTo(false);

        table.timestamps(true, true);

        table.index("user_id");
    });
}

export function down(knex) {
    return knex.schema.dropTableIfExists("password_resets");
}