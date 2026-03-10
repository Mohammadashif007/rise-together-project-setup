import express from "express";
import cors from "cors";
import router from "./app/routers/routers";

const app = express();

app.use(express.json());
app.use(cors());

// application api
app.use("/api/v1/", router);

export default app;
