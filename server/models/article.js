"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "UserId" });
      this.belongsTo(models.Category, { foreignKey: "CategoryId" });
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: "Users", id: "id" },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: "Categories", id: "id" },
      },
    },
    {
      sequelize,
      modelName: "Article",
      tableName: "Articles",
      charset: "utf-8",
      collate: "utf8_general_ci",
    }
  );
  return Article;
};
