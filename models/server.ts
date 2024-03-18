import express, {Express} from "express";
import cors from "cors";
import authRoutes from "../routes/auth"
import { dbConnection } from "../database/config";
import comprasRoutes from "../routes/compras"


export class Server {
 app: Express
port: string | number | undefined
authPath: string
comprasPath: string


    constructor(){
        this.app = express();
        this.port = process.env.PORT ;
        this.authPath = '/auth';
        this.comprasPath = '/compras';
       


        this.conectarDB()
        this.middlewares()
        this.routes()
    }

    async conectarDB(): Promise<void> {
        await dbConnection();
    }


    middlewares(): void {
        this.app.use(express.json())
        this.app.use(cors())
    }


routes(): void {
    this.app.use(this.authPath, authRoutes)
    this.app.use(this.comprasPath, comprasRoutes)
   

}

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`corriendo puertos ${this.port}`);
            
        });
} 
}