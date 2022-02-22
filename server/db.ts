import { Sequelize } from "sequelize";

const db = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  password: "hyoseon",
});

export default db;
