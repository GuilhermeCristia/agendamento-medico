import React, { useState, useEffect } from 'react';
import { agendarConsulta, listarConsultas } from '../services/api';

type Consulta = {
    id: number;
    paciente_id: number;
    medico_id: number;
    data: string;
    status: string;
};

export default function Agendamento() {
    const [consultas, setConsultas] = useState<Consulta[]>([]);
    const [form, setForm] = useState({
        paciente_id: 1,
        medico_id: 1,
        data: '',
    });

    useEffect(() => {
        carregarConsultas();
    }, []);

    const carregarConsultas = async () => {
        const dados = await listarConsultas();
        setConsultas(dados);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await agendarConsulta({ ...form, status: 'agendado' });
            await carregarConsultas();
            setForm({ ...form, data: '' });
        } catch (error) {
            alert('Erro ao agendar!');
        }
    };

    return (
        <div>
            <h1>Agendar Consulta</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="datetime-local"
                    value={form.data}
                    onChange={(e) => setForm({ ...form, data: e.target.value })}
                    required
                />
                <button type="submit">Agendar</button>
            </form>
            <h2>Consultas</h2>
            <ul>
                {consultas.map((consulta) => (
                    <li key={consulta.id}>
                        {new Date(consulta.data).toLocaleString()} - {consulta.status}
                    </li>
                ))}
            </ul>
        </div>
    );
}