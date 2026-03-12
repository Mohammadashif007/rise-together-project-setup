import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const result = await userService.createUser(data);
        sendResponse(res, {
            statusCode: httpStatus.CREATED,
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
        const users = await userService.getAllUsers();
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "All users retrieve successfully",
            data: users,
        });
    } catch (error) {
        next(error);
    }
};

export const UserController = {
    createUser,
    getAllUsers,
};
