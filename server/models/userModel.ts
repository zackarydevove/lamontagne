import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database'; // Assuming you have a 'database.ts' file exporting the 'sequelize' instance

class User extends Model {
  public id!: number;
  public googleId!: string;
  public facebookId!: string;
  public email!: string;
  public firstname!: string;
  public lastname!: string;
  public password!: string;
  public createdAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    googleId: {
      type: DataTypes.STRING,
    },
    facebookId: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false,
  }
);

export default User;