import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    const data = req.body;
    const result = await userService.createUser(data);
    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: result,
    });
};

export const UserController = {
    createUser,
};
