import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const result = await userService.createUser(data);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.getAllUsers();
        res.status(200).json({
            success: true,
            message: "All user retrieve successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

export const UserController = {
    createUser,
    getAllUsers,
};
