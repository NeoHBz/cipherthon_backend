import { Prisma } from "@prisma/client";
import { Patient, User } from "../utils/prisma";

export class PatientManager {
    constructor() {}
    public createPatient = async (body: Prisma.UserUpsertArgs["create"]) => {
        return User.create({
            data: {
                email: body.email,
                

            },
        });
    };
}
