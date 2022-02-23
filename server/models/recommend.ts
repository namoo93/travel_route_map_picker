import { Sequelize, DataTypes } from "sequelize";
import db from "../db";
import { Member } from "./member";
import { Savemap } from "./savemap";

export const Recommend = db.define(
  "recommend",
  {
    idx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    member_idx: {
      type: DataTypes.NUMBER,
      unique: true,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

Recommend.belongsTo(Member, {
  foreignKey: "idx",
  onDelete: "cascade",
});
Recommend.belongsTo(Savemap, {
  foreignKey: "idx",
  onDelete: "cascade",
});
