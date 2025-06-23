import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/pageRoutes";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.use(express.urlencoded({ extended: true}))

app.use("/api/v1",router);

app.listen(3000);

