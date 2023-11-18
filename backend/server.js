//server
const express = require('express');
const { manageConnection, debug } = require('./config/mongo');
const dotenv = require('dotenv');
const { cloudinaryConfig } = require('./config/cloudinary');
dotenv.config();

const EXPRESS_PORT = process.env.EXPRESS_PORT || 4949;
const SERVER_URL = process.env.SERVER_URL || 'http://localhost';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('*', cloudinaryConfig);

require('./config/socketio.js');


const api = require('./api/index.js');


app.use('/api', api);

app.listen(EXPRESS_PORT, async () => {
    console.clear();
    console.log(`🎉 Server running on port ${EXPRESS_PORT} - ${SERVER_URL}:${EXPRESS_PORT} 🎉`);
    await manageConnection.openConnection();
});