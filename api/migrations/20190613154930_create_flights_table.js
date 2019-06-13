exports.up = function(knex, Promise) {
  return knex.schema.createTable("flights", table => {
    table.increments();
    table.string("name");
    table.string("region");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("flights");
};
