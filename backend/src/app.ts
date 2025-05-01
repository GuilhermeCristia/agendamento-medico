import express from 'express';
import cors from 'cors';
import consultaRouter from './routes/consulta.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/consultas', consultaRouter);

export default app;