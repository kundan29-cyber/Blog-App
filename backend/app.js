import express from "express";
import mongoose from "mongoose";
// import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

const app = express();
// app.use(express.json());
app.use("/api/user", router);
// app.use("/api/blog", blogRouter);
mongoose
.connect(
    "mongodb+srv://kundankrishnan59:iAXGhPHzXnhLYThV@cluster0.jzgiaty.mongodb.net/?retryWrites=true&w=majority"
)
.then(() => app.listen(5000))
.then(() =>
console.log("Connected to Database and listening to localhost 5000")
)
.catch((err) => console.log(err));