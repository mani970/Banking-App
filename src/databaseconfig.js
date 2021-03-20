const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  password: "akanksha",
  database: "banking_system_project",
  user: "postgres",
});

client
  .connect()
  .then((res) => {
    console.log("PostgreSql connected");
  })
  .catch((err) => {
    console.log("Error while connecting to database", err);
  });

module.exports = client;
