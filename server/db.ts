import { Sequelize } from "sequelize";
import { development } from "./config/config.json";

const db = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  port: 3306,
  password: "tmxpdlwl1!",
  database: "map",
});

export default db;
