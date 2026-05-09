const express = require('express');

const router = express.Router();

const prisma = require('../utils/prisma');

router.get('/', async (req, res) => {

    try {

        const tasks = await prisma.task.findMany();

        res.json(tasks);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: 'Server Error'
        });

    }

});

module.exports = router;