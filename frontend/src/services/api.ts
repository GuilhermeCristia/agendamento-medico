import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/api",
});

export const listarConsultas = async () => {
    const response = await api.get('/consultas');
    return response.data;
};

export const agendarConsulta = async (consulta: {
    paciente_id: number;
    medico_id: number;
    data: string;
    status: string;
}) => {
    const response = await api.post('/consultas', consulta);
    return response.data;
};  