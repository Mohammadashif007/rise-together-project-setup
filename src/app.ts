import express from "express";
import cors from "cors";
import router from "./app/routers/routers";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";

const app = express();

app.use(express.json());
app.use(cors());

// application api
app.use("/api/v1/", router);

// ! global error handler
app.use(globalErrorHandler);

// ! not found
app.use(notFound);

export default app;
