import { Request, Response, Router } from "express";
import { catchAsync } from "../utils/catchAsyncWrapper";
import { UserManager } from "./user.manager";

export class userController {
    public router = Router();

    private _userManager: UserManager = new UserManager();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/", catchAsync(this.userLogin.bind(this)));
        this.router.patch("/", catchAsync(this.updateUser.bind(this)));
    }

    private async userLogin(req: Request, res: Response) {
        const { email } = req.body;
        const userProfile = await this._userManager.userLogin(email);
        res.status(200).send(userProfile);
    }

    private async updateUser(req: Request, res: Response) {
        const { firstName, lastName, mobile } = req.body;
        const { id } = req.params;
        const updatedUser = await this._userManager.updateUser(id, {
            firstName,
            lastName,
            mobile,
        });
        res.status(204).send(updatedUser);
    }
}
