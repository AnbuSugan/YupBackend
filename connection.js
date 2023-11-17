const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "anbu@2023",
  database: "yup",
});

module.exports = client;
