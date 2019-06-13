exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("flights")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("flights").insert([
        { name: "cebu pacific sale", region: "asia" },
        { name: "midyear seat sale", region: "asia" },
        { name: "oktoberfest special", region: "europe" }
      ]);
    });
};
