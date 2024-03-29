import { Request, Response, Router } from "express";
import { catchAsync } from "../utils/catchAsyncWrapper";
import { PatientManager } from "./patient.manager";

export class PatientController {
    public router = Router();

    private _patientManager: PatientManager = new PatientManager();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/", catchAsync(this.createPatient.bind(this)));
        // this.router.get("/", catchAsync(this.getUserProfile.bind(this)));
    }

    private async createPatient(req: Request, res: Response) {
        const body = req.body;
        const newUser = await this._patientManager.createPatient(body);
        res.status(200).send(newUser);
    }
}
