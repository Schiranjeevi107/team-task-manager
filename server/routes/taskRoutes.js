const express = require('express');

const prisma = require('../utils/prisma');

const router = express.Router();

router.post('/create', async (req, res) => {

    try {

        const {
            title,
            description,
            projectId,
            assignedToId
        } = req.body;

        const task = await prisma.task.create({

            data: {
                title,
                description,
                projectId: parseInt(projectId),
                assignedToId: parseInt(assignedToId)
            }

        });

        res.json({
            message: 'Task created successfully',
            task
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

        const tasks = await prisma.task.findMany({

            include: {
                project: true,
                assignedTo: true
            }

        });

        res.json(tasks);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: 'Server error'
        });

    }

});

router.put('/update-status/:id', async (req, res) => {

    try {

        const { status } = req.body;

        const task = await prisma.task.update({

            where: {
                id: parseInt(req.params.id)
            },

            data: {
                status
            }

        });

        res.json({
            message: 'Task updated successfully',
            task
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: 'Server error'
        });

    }

});

module.exports = router;