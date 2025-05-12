import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js"
import cors from "cors"

const app = express();



app.set("port",5000);
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
res.send('REST API EN RENDER WITHOUT DATABASE ENDPOINTS')
})

/* routes */
app.use("/api/categorias",categoriasRoutes);


export default app;