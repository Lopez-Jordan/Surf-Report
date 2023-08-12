// SURFER MODEL

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SurferLocation extends Model{}


SurferLocation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        surfer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Surfer',
                key: 'id'
            }
        },
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Location',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'SurferLocation',
    }
)

module.exports = SurferLocation;
