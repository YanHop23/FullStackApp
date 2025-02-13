require("dotenv").config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const errorHandler = require('./middleware/ErrorHandingMiddleware');
const router = require('./routes/index');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router)
//обробка помилок
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {console.log(`App listening on port ${PORT}`);})
    } catch (error) {
        console.error(error);
    }
}

start();