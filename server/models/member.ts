import { Model, Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("mysql");

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
  { freezeTableName: true }
);
