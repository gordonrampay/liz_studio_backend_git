const express = require('express');
const router = express.Router();

const {
    upload,
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    getAllProjectsWithFields
} = require('../controllers/project.controller');

router.post('/', upload, createProject);       
router.get('/', getAllProjects);                
router.get('/:id', getProjectById);              
router.put('/:id', upload, updateProject);       
router.delete('/:id', deleteProject);
router.get('/fields', getAllProjectsWithFields);    

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({ message: 'Internal server error' });
});

module.exports = router;