const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: process.env.password,
    database: "Details",
  },
});
knex.schema
  .createTable("amol_crud", (table) => {
    table.increments("ID"),
      table.string("User_n"),
      table.string("Name"),
      table.string("Surname"),
      table.string("Email"),
      table.string("profession");
  })
  .then(() => {
    console.log("Table has been created...");
  })
  .catch((err) => {
    if (err) {
      console.log("Table is already exist");
    }
  });
module.exports = knex;
