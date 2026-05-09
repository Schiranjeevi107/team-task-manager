const express = require('express');
const cors = require('cors');

require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

/*
=====================================
AUTH ROUTES
=====================================
*/
app.use('/api/auth', authRoutes);

/*
=====================================
PROJECT ROUTES
=====================================
*/
app.use('/api/projects', projectRoutes);

/*
=====================================
TASK ROUTES
=====================================
*/
app.use('/api/tasks', taskRoutes);

/*
=====================================
DEFAULT ROUTE
=====================================
*/
app.get('/', (req, res) => {

    res.send('Backend Working Successfully');

});

/*
=====================================
SERVER
=====================================
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});