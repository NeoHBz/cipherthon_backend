export class PatientManager {
    constructor() {}

    public createUser = async(
        body: any    
    ) => {
        console.log("manager createUser called")
        return true;
    }
}