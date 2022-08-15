import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import db from './config/db.js';

// Create an express app
const app = express();

//db connection
try {
    await db.authenticate(); //*se conecta a la base de datos
    db.sync(); //*crea tabla en db
    console.log('DB connected');
} catch (error) {
    console.log('DB connection error');
}

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
