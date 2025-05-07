//// Main file

// Packages importation
const {DataCreator} = require('./DataManagment/DataGenerator')
const {DeleteData} = require('./DataManagment/DeleteData')
const express = require('express');

// Connectios to the database

require('dotenv').config();
const mongoose = require('mongoose');

async function ConnectDB() { // Connection method
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the database  q(≧▽≦q)");
        
    } catch (error) {
        console.log("An error occurred, failed to connect  (。>︿<)_θ");
    }
}

// Program initialization in express
const program = express();


// Functions
async function initializeData() {
    await DataCreator(250000);
    //await DeleteData();
}
initializeData();


// Port initialization
const PORT = process.env.PORT || 3005;

program.listen(
    PORT,
    async () => {
        await ConnectDB(); // Connecto to the data base
        console.log(`Program running in http://localhost:${PORT}`)
    }
);
console.log();