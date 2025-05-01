import express from 'express';
import { criarConsulta, listarConsultas } from '../models/consulta.model';

const router = express.Router();

// Rota para agendar consulta
router.post('/', async (req, res) => {
    try {
        const consulta = await criarConsulta(req.body);
        res.status(201).json(consulta);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar consulta' });
    }
});

// Rota para listar consultas
router.get('/', async (req, res) => {
    try {
        const consultas = await listarConsultas();
        res.json(consultas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar consultas' });
    }
});

export default router;