import express, { Request, Response, NextFunction } from "express";
import router from "./routes/index";
import cors from "cors";
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

// Middleware para errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); 
    res.status(500).send('Hubo un error inesperado'); 
});

//Se crea la conexion con la base de datos con prisma
app.use((req: Request, res, next) => {
    req.prisma = prisma;
    next();
});

//Se utilizan las rutas 
app.use("/", router);

//Se configura un puerto para probar la aplicación
app.listen(4000, () =>{
    console.log(`El servidor corre en http://localhost:4000`);
})
