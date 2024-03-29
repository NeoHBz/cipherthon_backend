import { Router } from "express";
import { PatientController } from "./patient/patient.controller";
import { userController } from "./user/user.controller";
import { DoctorController } from "./doctor/doctor.controller";

const routerV1 = Router();

const routes = [
    {
        path: "/patient",
        route: new PatientController().router,
    },
    {
        path: "/doctor",
        route: new DoctorController().router,
    },
    {
        path: "/user",
        route: new userController().router,
    }
];

routes.forEach((route) => {
    routerV1.use(route.path, route.route);
});

export default routerV1;
