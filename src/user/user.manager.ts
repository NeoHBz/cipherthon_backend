import { Patient, User } from "../utils/prisma";

export class UserManager {
    constructor() {}

    public userLogin = async (email: string) => {
        return User.findFirstOrThrow({
            where: {
                email,
            },
            include: {
                patient: true,
                doctor: true,
            },
        });
    };

    public updateUser = async (id: string, body: any) => {
        const user = await User.findFirstOrThrow({
            where: {
                id,
            },
            include: {
                patient: true,
                doctor: true,
            },
        });
        const updateData ={
            firstName: body.firstName,
            lastName: body.lastName,
            mobile: body.mobile,
        }
        if (user.doctorId) {
            await Patient.update({
                where: {
                    id: user.doctorId,
                },
                data: updateData,
            })
        } else {
            await Patient.update({
                where: {
                    id: user.patientId!,
                },
                data: updateData
            })

        }
        return true
    };
}
