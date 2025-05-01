import pool from '../config/db';

export const criarConsulta = async (consulta: {
    paciente_id: number;
    medico_id: number;
    data: string;
    status: string;
}) => {
    const [result] = await pool.execute(
        'INSERT INTO consultas (paciente_id, medico_id, data, status) VALUES (?, ?, ?, ?)',
        [consulta.paciente_id, consulta.medico_id, consulta.data, consulta.status]
    );
    return result;
};

export const listarConsultas = async () => {
    const [consultas] = await pool.query('SELECT * FROM consultas');
    return consultas;
};