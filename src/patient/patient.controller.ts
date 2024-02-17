import { Router } from "express";
import { catchAsync } from "../utils/catchAsyncWrapper";
import { PatientManager } from "./patient.manager";

export class PatientController {
    public router = Router();

    private _patientManager: PatientManager = new PatientManager();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(
            "/",
            catchAsync(this.createUser.bind(this))
        );
    }

    private async createUser(req: any, res: any) {
        const body = req.body;
        const newUser = await this._patientManager.createUser(body);
        res.status(200).send(newUser);
    }

}