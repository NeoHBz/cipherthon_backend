import { Request, Response, Router } from "express";
import { catchAsync } from "../utils/catchAsyncWrapper";
import { DoctorManager } from "./doctor.manager";

export class DoctorController {
    public router = Router();

    private _patientManager: DoctorManager = new DoctorManager();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/", catchAsync(this.createDoctor.bind(this)));
        // this.router.get("/", catchAsync(this.getUserProfile.bind(this)));
    }

    private async createDoctor(req: Request, res: Response) {
        const body = req.body;
        // gynae, ortho, ent, eye, skin, dental, heart, neuro, child, general
        const newUser = await this._patientManager.createDoctor(body);
        res.status(200).send(newUser);
    }
}
