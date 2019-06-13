exports.up = function(knex, Promise) {
  return knex.schema.createTable("flights", table => {
    table.increments().primary();
    table
      .string("name", 20)
      .unique()
      .notNullable();
    table.string("region").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("flights");
};
