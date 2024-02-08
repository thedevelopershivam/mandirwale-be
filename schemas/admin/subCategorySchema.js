const Sequelize = require("sequelize");

const subCategory = {
    subCategory: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

module.exports = subCategory;