import AppError from "../../utils/AppError";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import statusCode from "http-status";

const createUser = async (payload: IUser) => {
    const isUserExist = await User.findOne({ email: payload.email });
    console.log(isUserExist);
    if (isUserExist) {
        throw new AppError(statusCode.BAD_REQUEST, "User already exist!");
    }
    const result = await User.create(payload);
    return result;
};

const getAllUsers = async () => {
    const result = await User.find();
    return result;
};

export const userService = {
    createUser,
    getAllUsers,
};
