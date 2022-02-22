import { Sequelize, DataTypes } from "sequelize";
import db from "../db";

const Guestbook = db.define(
  "guestbook",
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
    recommend_idx: {
      type: DataTypes.NUMBER,
      allowNull: false,
      unique: true,
    },
    guestbook_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
