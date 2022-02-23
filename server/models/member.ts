import { Model, Sequelize, DataTypes } from "sequelize";
import db from "../db";
import { Guestbook } from "./guestbook";
import { Recommend } from "./recommend";
import { Savemap } from "./savemap";

const sequelize = db;

// export interface Member {
//   idx: string;
//   id: string;
//   password: string;
//   nickname: string;
// }
export const Member = sequelize.define(
  "Member",
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING(15),
      unique: true,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
);

Member.hasMany(Guestbook);
Member.hasMany(Recommend);
Member.hasMany(Savemap);
