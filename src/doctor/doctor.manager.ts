import { Prisma } from "@prisma/client";
import { Doctor, User } from "../utils/prisma";

export class DoctorManager {
    constructor() {}

    public createDoctor = async (
        body: Prisma.UserUpsertArgs["create"] & Prisma.DoctorUpsertArgs["create"],
    ) => {
        const newDoctor = await Doctor.create({
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
                doctorId: newDoctor.id,
                gender: body.gender,
            },
        });
    };
}
