const express = require('express');
const router = express.Router();
const conductoresController = require('../controllers/conductoresController');

/**
 * @swagger
 * /api/conductores:
 *   get:
 *     summary: Obtiene todos los conductores
 *     description: Devuelve una lista de todos los conductores registrados en el sistema.
 *     responses:
 *       200:
 *         description: Lista de todos los conductores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                   apellido:
 *                     type: string
 *                   cedula:
 *                     type: string
 *                   fechaLicencia:
 *                     type: string
 *                   tarifaPorServicio:
 *                     type: number
 */
router.get('/', conductoresController.getAllConductores);

/**
 * @swagger
 * /api/conductores/{id}:
 *   get:
 *     summary: Obtiene un conductor por ID
 *     description: Devuelve un conductor específico basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del conductor
 *     responses:
 *       200:
 *         description: Información de un conductor específico
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                 apellido:
 *                   type: string
 *                 cedula:
 *                   type: string
 *                 fechaLicencia:
 *                   type: string
 *                 tarifaPorServicio:
 *                   type: number
 *       404:
 *         description: Conductor no encontrado
 */
router.get('/:id', conductoresController.getConductorById);

/**
 * @swagger
 * /api/conductores:
 *   post:
 *     summary: Crea un nuevo conductor
 *     description: Agrega un nuevo conductor al sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               cedula:
 *                 type: string
 *               fechaLicencia:
 *                 type: string
 *               tarifaPorServicio:
 *                 type: number
 *     responses:
 *       201:
 *         description: Conductor creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 nombre:
 *                   type: string
 *                 apellido:
 *                   type: string
 *                 cedula:
 *                   type: string
 *                 fechaLicencia:
 *                   type: string
 *                 tarifaPorServicio:
 *                   type: number
 *       500:
 *         description: Error en la creación del conductor
 */
router.post('/', conductoresController.createConductor);

/**
 * @swagger
 * /api/conductores/{id}:
 *   put:
 *     summary: Actualiza un conductor existente
 *     description: Actualiza los detalles de un conductor específico basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del conductor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               cedula:
 *                 type: string
 *               fechaLicencia:
 *                 type: string
 *               tarifaPorServicio:
 *                 type: number
 *     responses:
 *       200:
 *         description: Conductor actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 nombre:
 *                   type: string
 *                 apellido:
 *                   type: string
 *                 cedula:
 *                   type: string
 *                 fechaLicencia:
 *                   type: string
 *                 tarifaPorServicio:
 *                   type: number
 *       404:
 *         description: Conductor no encontrado
 *       500:
 *         description: Error en la actualización del conductor
 */
router.put('/:id', conductoresController.updateConductor);

/**
 * @swagger
 * /api/conductores/{id}:
 *   delete:
 *     summary: Elimina un conductor
 *     description: Elimina un conductor específico basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del conductor
 *     responses:
 *       200:
 *         description: Conductor eliminado exitosamente
 *       404:
 *         description: Conductor no encontrado
 *       500:
 *         description: Error al eliminar el conductor
 */
router.delete('/:id', conductoresController.deleteConductor);

module.exports = router;
