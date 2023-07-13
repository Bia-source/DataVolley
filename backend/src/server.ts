import express from "express";
import cors from "cors";
import { routes } from "./routes/index.routes";
const app = express();
const port = 2000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, ()=> {
    console.log("Server runner🚀")
});