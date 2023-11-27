import express from "express";
import { userRoutes } from "./modules/users/user.route";
const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
