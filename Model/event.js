// server/models/Event.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const Event = sequelize.define('Event', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, { timestamps: true });

module.exports = Event;
