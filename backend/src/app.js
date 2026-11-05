const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/project.routes.js');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/projects', projectRoutes);

module.exports = app;
