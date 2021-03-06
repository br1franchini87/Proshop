import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

connectDB();

app.use("/api/products", productRoutes);
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`server god to go in ${process.env.NODE_ENV} mode port ${PORT}`)
);

app.get("/", (req, res) => {
    res.send("API is running...");
});
