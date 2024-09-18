const express = require('express');
const router = express.Router();
const miembrosController = require('../controllers/controller.member.js');
const autoresController = require('../controllers/controller.autores.js');
const librosController = require('../controllers/controller.libros.js');

//miembros
router.post('/miembros/create', miembrosController.create);
router.get('/miembros', miembrosController.retrieveAllMembers);
router.get('/miembros/:id', miembrosController.getMiembroById);
router.put('/miembros/:id', miembrosController.updateById);
router.delete('/miembros/:id', miembrosController.deleteById);

//autores
router.post('/autores/create', autoresController.create);
router.get('/autores', autoresController.retrieveAllAutores);
router.get('/autores/:id', autoresController.getAutorById);
router.put('/autores/:id', autoresController.updateById);
router.delete('/autores/:id', autoresController.deleteById);

//libros
router.post('/libros/create', librosController.create);
router.get('/libros', librosController.retrieveAllLibros);
router.get('/libros/:id', librosController.getLibroById);
router.put('/libros/:id', librosController.updateById);
router.delete('/libros/:id', librosController.deleteById);

module.exports = router;
