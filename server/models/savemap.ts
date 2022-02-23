import { Sequelize, DataTypes } from "sequelize";
import db from "../db";
import { Guestbook } from "./guestbook";
import { Member } from "./member";
import { Recommend } from "./recommend";

export const Savemap = db.define(
  "savemap",
  {
    idx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    member_idx: {
      type: DataTypes.NUMBER,
      unique: true,
    },
    datetime: {
      type: DataTypes.DATE,
    },
    latitude: {
      type: DataTypes.FLOAT,
      validate: {
        min: -90,
        max: 90,
      },
    },
    longitude: {
      type: DataTypes.FLOAT,
      validate: {
        min: -180,
        max: 180,
      },
    },
    memo: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

Savemap.belongsTo(Member, {
  foreignKey: "idx",
  onDelete: "cascade",
});
Savemap.hasMany(Guestbook);
Savemap.hasMany(Recommend);
