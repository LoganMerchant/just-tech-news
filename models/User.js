const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model & inherit the sequelize Model class
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // defines the id column
        id: {
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's 'NOT NULL' option
            allowNull: false,
            // instruct that this is the PRIMARY KEY
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // define the username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // defines the email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in this table
            unique: true,
            // if allowNull is set to false, data can be run through validators before table creation
            validate: {
                isEmail: true
            }
        },
        // defines the password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // password must be at least 4 characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;