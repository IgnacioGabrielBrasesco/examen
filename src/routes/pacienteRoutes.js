import { Router } from 'express';
import { Paciente } from '../models/index.js'; 

const router = Router();

// GET /api/Pacientes 
router.get('/', async (req, res) => {
    try {
        /*
        Pacienteo.findAll(): Obtiene todos los Pacienteos que haya guardados en la DB
        */
        const Pacientes = await Paciente.findAll();
        res.status(200).json(Pacientes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener Pacienteos', error: error.message });
    }
});

// GET /api/Paciente/:id (Obtener uno Pacienteo por su id)
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        /*
        Paciente.findByPk(id): Similar a findAll, pero obteniendo sólo el registro que coincida con el ID proporcionado.
        */
        const Paciente = await Paciente.findByPk(id);
        if (Paciente) {
            res.status(200).json(Paciente);
        } else {
            res.status(404).json({ message: 'Paciente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener Paciente', error: error.message });
    }
});

// POST /api/Pacientes (Crear uno nuevo)
router.post('/', async (req, res) => {
    try {
        /*
        Paciente.create(req.body): Crea un nuevo Paciente. Recibe un objeto con los atributos que querramos registrar, podemos validar aquí o "confiar" que el objeto viene validado desde el frontend
        */
        const nuevoPaciente = await Paciente.create(req.body);
        res.status(201).json(nuevoPaciente);
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            // A veces, pueden ocurrir multiples errores a la vez, el detalle lo encontramos en `error.errors`, el cual es un array y podemos mapearlo.
            return res.status(400).json({ message: 'Error de validación', errors: error.errors ? error.errors.map(e => e.message) : error.message });
        }
        res.status(500).json({ message: 'Error al crear Paciente', error: error.message });
    }
});

// PUT /api/Pacientes/:id (Actualizar uno existente)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const Paciente = await Paciente.findByPk(id);
        if (Paciente) {
            /*
            Paciente.update(req.body): Actualiza la instancia del Pacienteo enviandole un objeto con los atributos a reemplazar. 
            Notar que `.update()` es un método de instancia, no estático como `.findAll()`
            */
            const PacienteActualizado = await Paciente.update(req.body);
            res.status(200).json(PacienteActualizado);
        } else {
            res.status(404).json({ message: 'Paciente no encontrado para actualizar' });
        }
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: 'Error de validación', error: error.message });
        }
        res.status(500).json({ message: 'Error al actualizar Paciente', error: error.message });
    }
});

// DELETE /api/Pacientes/:id (Eliminar uno)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Paciente.destroy({ where: { id } }): Elimina el Pacienteo filtrando por el campo `id`. Devuelve la cantidad de registros afectados por la eliminación.
        const resultado = await Paciente.destroy({ where: { id: id } });
        if (resultado > 0) {
            res.status(200).json({ message: 'Paciente eliminado exitosamente' });
        } else {
            res.status(404).json({ message: 'Paciente no encontrado para eliminar' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar Paciente', error: error.message });
    }
});

export default router;