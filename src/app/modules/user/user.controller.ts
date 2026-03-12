import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import httpStatus from "http-status";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const result = await userService.createUser(data);
        res.status(httpStatus.CREATED).json({
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
        res.status(httpStatus.OK).json({
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
