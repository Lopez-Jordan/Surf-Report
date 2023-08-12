//LOCATION MODEL

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model{}


Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
        },
        lat: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        long: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Location',
    }
)

module.exports = Location;