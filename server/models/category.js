"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Article);
      // define association here
    }
  }
  Category.init(
    {
      name: { type: DataTypes.STRING, defaultValue: "" },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "Categories",
      charset: "utf-8",
      collate: "utf8_general_ci",
    }
  );
  return Category;
};
