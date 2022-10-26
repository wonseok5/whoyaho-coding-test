"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  UserProfile.init(
    {
      nickname: DataTypes.STRING,
      intro: DataTypes.STRING,
      profileImage: DataTypes.STRING,
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: "Users", id: "id" },
      },
    },
    {
      sequelize,
      modelName: "UserProfile",
      charset: "utf-8",
      collate: "utf8_general_ci",
    }
  );
  return UserProfile;
};
