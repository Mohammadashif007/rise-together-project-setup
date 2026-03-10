import mongoose from "mongoose";

import app from "./app";
import { env } from "./app/config/env";


const startServer = async () => {
    try {
        await mongoose.connect(env.DATABASE_URL as string);

        console.log("Connected with database ");

        app.listen(env.PORT, () => {
            console.log(`Server is running on port ${env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();
