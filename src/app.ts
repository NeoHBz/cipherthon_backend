import express, { NextFunction, Request, Response } from "express";
import routesV1 from "./routesV1";
import httpStatus from "http-status";
import cors from "cors";
import { ApiError } from "./utils/ApiError";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

app.use("/api/v1", routesV1);

// send back a 404 error for any unknown api request
app.use((_req: Request, _res: Response, next: NextFunction) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

export default app;
