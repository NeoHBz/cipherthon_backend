import { Prisma } from "@prisma/client";
import { Patient, User } from "../utils/prisma";

export class PatientManager {
    constructor() {}

    public createPatient = async (
        body: Prisma.UserUpsertArgs["create"] & Prisma.PatientUpsertArgs["create"],
    ) => {
        const newPatient = await Patient.create({
            data: {
                firstName: body.firstName,
                mobile: body.mobile,
                lastName: body.lastName,
            },
        });

        return User.create({
            data: {
                email: body.email,
                createdAt: new Date(),
                patientId: newPatient.id,
            },
        });
    };
}
