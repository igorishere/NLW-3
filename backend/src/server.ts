import express from "express";
import path from "path";
import cors from "cors";
import  "express-async-errors";

// Banco de dados
import './database/connection.ts' 
// Rotas da API
import routes  from './routes';
// Manipulardor de erros
import {errorHandler} from "./errors/handler";

const app = express();
const PORT = '3333';

app.use( cors() );
app.use( express.json() );
app.use( routes );
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')));
app.use(errorHandler);


app.listen(PORT);