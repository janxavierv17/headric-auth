import "dotenv/config";
import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "./config";

const app = express();
const BASE_PATH = config.BASE_PATH;

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
	cors({
		origin: config.APP_ORIGIN,
		credentials: true,
	})
);

app.get("/", async (req: Request, res: Response) => {
	res.status(200).json({ message: "healthy" });
});

app.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}`));
