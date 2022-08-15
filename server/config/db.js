import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const db = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

export default db;
