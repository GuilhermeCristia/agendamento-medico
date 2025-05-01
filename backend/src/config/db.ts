import { createPool, Pool } from 'mysql2/promise';

const pool: Pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'sua-senha', // Troque para sua senha!
    database: 'agendamento_medico',
    waitForConnections: true,
    connectionLimit: 10
});

export default pool;