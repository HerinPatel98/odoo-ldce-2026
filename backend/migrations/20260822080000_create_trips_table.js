/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable("trips", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().nullable().index();
        table.string("slug", 120).notNullable().unique();
        table.string("title", 150).notNullable();
        table.string("status", 30).notNullable().defaultTo("confirmed");
        table.string("start_date", 10).notNullable();
        table.string("end_date", 10).notNullable();
        table.string("location", 150).notNullable();
        table.string("airport_route", 100).notNullable();
        table.text("description").notNullable();
        table.decimal("total_cost", 10, 2).notNullable();
        table.decimal("budget", 10, 2).notNullable();
        table.json("expenses").notNullable();
        table.json("checklist").notNullable();
        table.timestamps(true, true);
    });

    await knex("trips").insert({
        slug: "autumn-in-tokyo",
        title: "Autumn in Tokyo",
        status: "confirmed",
        start_date: "2026-10-12",
        end_date: "2026-10-20",
        location: "Tokyo & Hakone",
        airport_route: "HND • NRT",
        description: "Modern skyscrapers, historic shrines, culinary journeys, and a scenic day trip to Hakone.",
        total_cost: 1240,
        budget: 1500,
        expenses: JSON.stringify([
            { label: "Stay (7 nights)", amount: 720 },
            { label: "Transport & JR Pass", amount: 310 },
            { label: "Tickets & Tours", amount: 210 }
        ]),
        checklist: JSON.stringify([
            { label: "Passport valid > 6 months", completed: true },
            { label: "eSIM Data Roaming setup", completed: true },
            { label: "Suica / Pasmo IC Card on Apple Wallet", completed: true },
            { label: "Visit Japan Web QR code generated", completed: false }
        ])
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists("trips");
}