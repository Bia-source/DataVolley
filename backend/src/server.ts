import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { routes } from "./routes/index.routes";
import { AppError } from "./shared/error/AppError";
const app = express();
const port = 2000;

app.use(express.json());
app.use(cors());

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            error: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        error: `Internal server error - ${err.message}`
    });
});

app.use(routes);

app.listen(port, ()=> {
    console.log("Server runner🚀")
});