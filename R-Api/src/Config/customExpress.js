const express = require('express');
const cors = require('cors');
const consign = require('consign');
const { v4: uuidv4, v4: isUuid } = require('uuid');

module.exports = () => {
const app = express();
app.use(cors());
app.use(express.json());

consign().include('./src/Controllers').into(app);

return app;
}