const Data = require('../model/data');
const Objetivo = require('../model/objetivos');

const path = require('path');

const saveData = async () => {
    const fs = require('fs');

    const dirPath = path.resolve(__dirname, '../../data/indicadores/');
    let files = fs.readdirSync(dirPath);
    
    files.forEach(async fileName => {
        try {
        const file = fs.readFileSync(path.join(dirPath, fileName), 'utf8');
        const fileData = JSON.parse(file);
        fileName = fileName.split('.')[0];
        fileName = fileName.replace(/-/g, '.'); 
        
            await Data.create({
                id: fileName,
                titulo: fileData.titulo,
                regiao: fileData.regiao
            });
        } catch (err) {
            console.log("Erro ao salvar dados no banco de dados: ", err.message);
            return;
        }
    });
};

const saveObjectives = async () => {
    const fs = require('fs');

    const dirPath = path.resolve(__dirname, '../../data/');
    try {
        const file = fs.readFileSync(path.join(dirPath, 'objetivos.json'), 'utf8');
        const jsonData = JSON.parse(file);

        jsonData.forEach(async objetivo => {
            try {
                await Objetivo.create({
                    id: objetivo.id,
                    descricao: objetivo.objetivo,
                    indicadores: objetivo.indicadores
                });
            } catch (error) {
                console.error(`Erro ao salvar objetivo com ID ${objetivo.id}: ${error.message}`);
            }
        });

        console.log('Objetivos salvos no banco de dados com sucesso.');
    } catch (error) {
        console.error('Erro ao salvar objetivos no banco de dados:', error.message);
    }
}

const getObjectives = async () => {
    return await Objetivo.find();
}

const getIndicators = async (id) => {
    try {
        const indicadores = await Data.find({ id: id });
        return indicadores;
    } catch (error) {
        console.error('Erro ao obter indicadores:', error.message);
        throw error;
    }
}

module.exports = {saveData, saveObjectives, getObjectives, getIndicators};
