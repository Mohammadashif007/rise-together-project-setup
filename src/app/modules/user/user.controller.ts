import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { catchAsync } from "../../utils/catchAsync";

const createUser = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const data = req.body;
        const result = await userService.createUser(data);
        sendResponse(res, {
            statusCode: httpStatus.CREATED,
            success: true,
            message: "User created successfully",
            data: result,
        });
    },
);

const getAllUsers = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const users = await userService.getAllUsers();
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "All users retrieve successfully",
            data: users,
        });
    },
);

export const UserController = {
    createUser,
    getAllUsers,
};
