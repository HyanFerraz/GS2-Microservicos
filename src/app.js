const express = require('express');
const database = require('./database');
const controller = require('./controller/controller');

const app = express();
const port = 3000;

database();
controller.saveData();
controller.saveObjectives();

app.get('/objetivos', async (req, res) => {
    const objectives = await controller.getObjectives();
    
    res.status(200).send(objectives);
    }
);

app.get('/indicador/:id', async (req, res) => {
    const id = req.params.id;
    const indicators = await controller.getIndicators(id);
    
    res.status(200).send(indicators);
    }
);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    }
);

