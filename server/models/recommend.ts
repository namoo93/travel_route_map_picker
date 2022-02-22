import { Sequelize, DataTypes } from "sequelize";
import db from "../db";

const Recommend = db.define(
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
    savemap_idx: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);
