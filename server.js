import express from 'express';
import dotenv from 'dotenv';
import { main } from './config/dbConfig.js';

dotenv.config({path: './config/.env'})

const app = express()

// Middleware

const PORT = process.env.PORT || 3001
app.listen(PORT, (err) => {
    if(!err) {
        main();
        console.log(`Server running on port: ${PORT}`)
    }    
})