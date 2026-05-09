const express = require('express');

const prisma = require('../utils/prisma');

const router = express.Router();

router.post('/create', async (req, res) => {

    try {

        const { name, description } = req.body;

        const project = await prisma.project.create({

            data: {
                name,
                description
            }

        });

        res.json({
            message: 'Project created successfully',
            project
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: 'Server error'
        });

    }

});

router.get('/', async (req, res) => {

    try {

        const projects = await prisma.project.findMany();

        res.json(projects);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: 'Server error'
        });

    }

});

module.exports = router;