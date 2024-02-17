import { Router } from "express";
import { PatientController } from "./patient/patient.controller";

const routerV1 = Router();

const routes = [
    {
        path: "/patient",
        route: new PatientController().router,
    }
];

routes.forEach((route) => {
    routerV1.use(route.path, route.route);
});

export default routerV1;
