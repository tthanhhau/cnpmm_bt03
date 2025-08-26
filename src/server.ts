import express from "express";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import webRoutes from "./routes/web";
import { sequelize } from "./models";

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); // nếu có file tĩnh

app.use("/", webRoutes);

const PORT = process.env.PORT || 8080;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected");
    app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
})();
